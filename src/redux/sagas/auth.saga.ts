import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {routes} from '../../constants';
import {NavigationService} from '../../navigation';
import {CustomToastBottom, showToastError, showToastSuccess} from '../../utils';
import {GoogleService} from '../../utils/google';
import {AuthActions, LoadingActions} from '../reducer';
import {AuthService, UserService} from '../services';
import {LoginPayload, NewPasswordPayload, SendOTPPayload} from '../types';

//login
function* loginSaga(action: PayloadAction<LoginPayload>): Generator {
  yield put(LoadingActions.showLoading());
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
    yield put(LoadingActions.hideLoading());
  }
}

function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'password' | 'email'>>,
): Generator {
  yield put(LoadingActions.showLoading());
  try {
    yield GoogleService.logout();
    const checkLogin = yield GoogleService.checkSignIn();
    if (!checkLogin) {
      const {idToken, user}: any = yield GoogleService.login();
      console.log(idToken);

      const {data}: any = yield call(AuthService.hanleGGLogin, {
        device_token: action.payload.device_token,
        idToken,
      });

      if (data.code === 200) {
        if (data?.data?.isUpdatePassword === false) {
          yield put(
            AuthActions.handleLoginSuccess({
              accessToken: data.data.access_token,
              refreshToken: data.data.refresh_token,
              enableSignIn: false,
            }),
          );

          showToastSuccess('Login success, Plesae update profile to continue');
          return NavigationService.navigate(routes.CREATE_NEW_PASSWORD, {
            email: user.email,
          });
        }

        yield put(
          AuthActions.handleLoginSuccess({
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            enableSignIn: true,
          }),
        );

        yield call(getProfileUserSaga);
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
    yield put(LoadingActions.hideLoading());
  }
}

function* createAccountSaga(
  action: PayloadAction<Omit<LoginPayload, 'idToken' | 'device_token'>>,
): Generator {
  yield put(LoadingActions.showLoading());
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
    yield put(LoadingActions.hideLoading());
  }
}
//get profile user
function* getProfileUserSaga(): Generator {
  try {
    const {data}: any = yield call(UserService.getUserProfile);

    if (data.code === 200) {
      yield put(
        AuthActions.getUserInfoSuccess({
          user: data.data[0],
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
  yield put(LoadingActions.showLoading());
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
    yield put(LoadingActions.hideLoading());
  }
}

function* deleteAvatarUser(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const {data}: any = yield call(UserService.deleteUserAvatar);
    if (data.code === 200) {
      yield call(getProfileUserSaga);
      showToastSuccess(data.message);
    } else if (data.code === 400) {
      showToastError(data.message);
    } else {
      showToastError('Please check your connection');
    }
  } catch (error: any) {
    console.log('Have error at get profile saga: ' + error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* updateUserProfile(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
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
      showToastError('Please check your connection');
    }
  } catch (error: any) {
    console.log('Please check your connection' + error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//clean user
function* cleanUser(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    yield put(
      AuthActions.getUserInfoFailed({
        enableSignIn: false,
        accessToken: '',
        refreshToken: '',
        user: {},
      }),
    );
  } catch (error) {
    throw error;
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

///////////////////////FORGOT PASSWORD/////////////////////////
function* forgotPasswordSaga(
  action: PayloadAction<Pick<LoginPayload, 'email'>>,
): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const {data}: any = yield call(
      AuthService.hanleForgotPassword,
      action.payload,
    );
    console.log(data);
    if (data.code === 200) {
      // yield put(AuthActions.setEmailForgotPassword(action.payload));
      yield CustomToastBottom('Please check your email to get OTP');
      yield NavigationService.navigate(routes.SEND_OTP, {
        email: action.payload.email,
      });
    } else if (data.code === 429) {
      yield CustomToastBottom(
        'Need 60s to send OTP again, please use old OTP sent to your email',
      );
      yield NavigationService.navigate(routes.SEND_OTP, {
        email: action.payload.email,
      });
    } else {
      CustomToastBottom(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
    CustomToastBottom('Server have error, please try again later');
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

///////////////////////SEND OTP/////////////////////////
function* sendOTPSaga(
  action: PayloadAction<Pick<SendOTPPayload, 'email'>>,
): Generator {
  yield put(LoadingActions.showLoading());
  try {
    const {data}: any = yield call(AuthService.handleSendOTP, action.payload);
    if (data.code === 200) {
      CustomToastBottom(data.message);
    } else {
      CustomToastBottom(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
    throw error;
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

///////////////////////VERIFY OTP/////////////////////////
function* verifyOTPSaga(action: PayloadAction<SendOTPPayload>): Generator {
  console.log(action.payload);
  yield put(LoadingActions.showLoading());
  try {
    const {data}: any = yield call(AuthService.handleVerifyOTP, action.payload);
    if (data.code === 200) {
      CustomToastBottom(data.message);
      NavigationService.navigate(routes.CREATE_NEW_PASSWORD, {
        email: action.payload.email,
        isOTP: true,
      });
    } else {
      CustomToastBottom(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
    throw error;
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

///////////////////////NEW PASSWORD/////////////////////////
function* UpdateNewPasswordSaga(
  action: PayloadAction<NewPasswordPayload>,
): Generator {
  console.log(action.payload);
  yield put(LoadingActions.showLoading());
  try {
    const {data}: any = yield call(
      AuthService.handleNewPassword,
      action.payload,
    );
    if (data.code === 200 && action.payload.isOTP === false) {
      yield CustomToastBottom('Update password successfull!!');
      yield put(AuthActions.UpdatePassword());
      yield call(getProfileUserSaga);
      CustomToastBottom('Login sucessfull!!');
    } else if (data.code === 200 && action.payload.isOTP === true) {
      yield CustomToastBottom('Update password successfull!!');
      yield NavigationService.navigate(routes.SIGN_IN);
    } else {
      yield CustomToastBottom('server have error, please try again later');
      yield NavigationService.navigate(routes.LOBBY);
    }
  } catch (error: any) {
    console.log(error.message);
    throw error;
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.getUserInfo.type, getProfileUserSaga);
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);
  yield takeLatest(AuthActions.handleLoginGoogle.type, loginGoogleSaga);
  yield takeLatest(AuthActions.handleCreateAccount.type, createAccountSaga);
  yield takeLatest(AuthActions.handleUpdateAvatar.type, updateAvatarUser);
  yield takeLatest(AuthActions.handleDeleteAvatar.type, deleteAvatarUser);
  yield takeLatest(AuthActions.handleUpdateUserProfile.type, updateUserProfile);
  yield takeLatest(AuthActions.handleForgotPassword.type, forgotPasswordSaga);
  yield takeLatest(AuthActions.handleSendOTP.type, sendOTPSaga);
  yield takeLatest(AuthActions.handleVerifyOTP.type, verifyOTPSaga);
  yield takeLatest(
    AuthActions.handleUpdatePassword.type,
    UpdateNewPasswordSaga,
  );
}
