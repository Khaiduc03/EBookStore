import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {routes} from '../../constants';
import {NavigationService} from '../../navigation';
import {showToastError, showToastSuccess} from '../../utils';
import {GoogleService} from '../../utils/google';
import {AppActions, AuthActions} from '../reducer';
import {AuthService, UserService} from '../services';
import {LoginPayload} from '../types';

//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
  yield put(AppActions.handleLoading());
  try {
    const {data}: any = yield call(AuthService.handleLogin, action.payload);

    if (data.code === 200) {
      yield put(
        AuthActions.handleLoginSuccess({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
        }),
      );
      yield call(getProfileUserSaga);
      if (data.data.isUpdate === false) {
        showToastSuccess('Login success, Plesae update profile to continue');
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
    yield put(AppActions.handleHideLoading());
  }
}

function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'password' | 'email'>>,
): Generator {
  yield put(AppActions.handleLoading());
  try {
    yield GoogleService.logout();
    const checkLogin = yield GoogleService.checkSignIn();
    if (!checkLogin) {
      const {idToken}: any = yield GoogleService.login();

      const {data}: any = yield call(AuthService.hanleGGLogin, {
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
      //  yield call(getProfileUserSaga);
        showToastSuccess(data.message);
      } else if (data.code === 400) {
        showToastError(
          'This service is not available at this time, please try again later!!',
        );
      } else {
        showToastError('Pless check your connection');
        yield call(cleanUser);
      }
    }
  } catch (error: any) {
    console.log('Have error at login google saga: ' + error.message);
  } finally {
    yield put(AppActions.handleHideLoading());
  }
}

function* createAccountSaga(
  action: PayloadAction<Omit<LoginPayload, 'idToken' | 'device_token'>>,
): Generator {
  yield put(AppActions.handleLoading());
  try {
    const {data}: any = yield call(
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
      NavigationService.navigate(routes.UPDATE_PROFILE);

      showToastSuccess(data.message);
    } else {
      showToastError(data.message);
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  } finally {
    yield put(AppActions.handleHideLoading());
  }
}
//get profile user
function* getProfileUserSaga(): Generator {
  try {
    const {data}: any = yield call(UserService.getUserProfile);
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
  yield put(AppActions.handleLoading());
  try {
    const {data}: any = yield call(
      UserService.updateUserAvatar,
      action.payload,
    );

    if (data.code === 200) {
      yield call(getProfileUserSaga);
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      showToastError('unstable connection');
    }
  } catch (error: any) {
    console.log('Have error at get profile saga: ' + error.message);
  } finally {
    yield put(AppActions.handleHideLoading());
  }
}

function* deleteAvatarUser(): Generator {
  yield put(AppActions.handleLoading());
  try {
    const {data}: any = yield call(UserService.deleteUserAvatar);
    if (data.code === 200) {
      yield call(getProfileUserSaga);
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      showToastError('Pless check your connection');
    }
  } catch (error: any) {
    console.log('Have error at get profile saga: ' + error.message);
  } finally {
    yield put(AppActions.handleHideLoading());
  }
}

function* updateUserProfile(action: PayloadAction<any>): Generator {
  yield put(AppActions.handleLoading());
  try {
    const {data}: any = yield call(
      UserService.updateUserProfile,
      action.payload,
    );
    if (data.code === 200) {
      yield call(getProfileUserSaga);
      yield put(AuthActions.handleUpdateUserProfileSuccess());
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      showToastError('Pless check your connection');
    }
  } catch (error: any) {
    console.log('Pless check your connection' + error);
  } finally {
    yield put(AppActions.handleHideLoading());
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
  yield takeLatest(AuthActions.handleDeleteAvatar.type, deleteAvatarUser);
  yield takeLatest(AuthActions.handleUpdateUserProfile.type, updateUserProfile);
}
