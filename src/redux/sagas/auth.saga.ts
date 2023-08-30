/* eslint-disable import/order */
import { PayloadAction } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthActions } from '../reducer';
import { AuthService, UserService } from '../services';
import { LoginPayload } from '../types';

import { routes } from '../../constants';
import { NavigationService } from '../../navigation';
import { showToastError, showToastSuccess } from '../../utils';
import { GoogleService } from '../../utils/google';

//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
  try {
    const { data }: any = yield call(AuthService.handleLogin, action.payload);

    if (data.code === 200) {
      yield put(
        AuthActions.handleLoginSuccess({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
        }),
      );
      yield call(getProfileUserSaga);
      if (data.data.isUpdate === false) {
        showToastError('Please update profile to continue');
        return NavigationService.navigate(routes.UPDATE_PROFILE);
      }
      yield put(
        AuthActions.handleLoginSuccess({
          enableSignIn: true,
        }),
      );
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      showToastError('unstable connection');
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    // yield put(LoadingActions.hideLoading());
  }
}

function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'password' | 'email'>>,
): Generator {
  //  yield put(LoadingActions.showLoading());
  try {
    yield GoogleService.logout();
    const checkLogin = yield GoogleService.checkSignIn();
    if (!checkLogin) {
      const { idToken }: any = yield GoogleService.login();
      console.log(idToken)
      const { data }: any = yield call(AuthService.hanleGGLogin, {
        device_token: action.payload.device_token,
        idToken,
      });

      if (data.code === 200) {
        yield put(
          AuthActions.handleLoginSuccess({
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            enableSignIn: true,
          }),
        );
        ToastAndroid.show('Login google success', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(data.message, ToastAndroid.SHORT);
        yield call(cleanUser);
      }
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

function* createAccountSaga(
  action: PayloadAction<Omit<LoginPayload, 'idToken' | 'device_token'>>,
): Generator {
  try {
    const { data }: any = yield call(
      AuthService.handleCreateAccount,
      action.payload,
    );
    if (data.code === 200) {
      yield put(
        AuthActions.handleCreateAccountSuccess({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
        }),
      );

      showToastSuccess(data.message);
    } else {
      showToastError(data.message);
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    NavigationService.navigate(routes.UPDATE_PROFILE);
  }
}
//get profile user
function* getProfileUserSaga(): Generator {
  try {
    const { data }: any = yield call(UserService.getUserProfile);
    if (data.code === 200) {
      yield put(
        AuthActions.getUserInfoSuccess({
          user: data.data,
        }),
      );
    } else {
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

//update avatar user
function* updateAvatarUser(action: PayloadAction<FormData>): Generator {
  try {
    const { data }: any = yield call(
      UserService.updateUserAvatar,
      action.payload,
    );

    if (data.code === 200) {
      yield put(
        AuthActions.getUserInfoSuccess({
          user: data.data,
        }),
      );
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      console.log(data);
      showToastError('unstable connection');
    }
  } catch (error: any) {
    console.log('Have error at get profile saga: ' + error.message);
  }
}

//clean user
function* cleanUser(): Generator {
  yield put(
    AuthActions.getUserInfoFailed({
      enableSignIn: false,
      accessToken: '',
      refreshToken: '',
      user: {},
    }),
  );
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.getUserInfo.type, getProfileUserSaga);
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);
  yield takeLatest(AuthActions.handleLoginGoogle.type, loginGoogleSaga);
  yield takeLatest(AuthActions.handleCreateAccount.type, createAccountSaga);
  yield takeLatest(AuthActions.handleUpdateAvatar.type, updateAvatarUser);
}
