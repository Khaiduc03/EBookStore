import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';
import {AuthActions, LoadingActions} from '../reducer';
import {NavigationService} from '../../navigation';
import {routes} from '../../constants';
import {ChangePasswordType} from '../types/user.type';
import {da} from 'date-fns/locale';

function* postFollowSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.postFollow, action.payload);
    if (data.code == 200) {
      yield put(UserAction.handleSuccerFollower(action.payload));
      yield put(UserAction.handleSuccerFollowRandom(action.payload));
      yield put(AuthActions.getUserInfo());
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postFollwRandom(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.postFollow, action.payload);
    if (data.code == 200) {
      yield put(UserAction.handleSuccerFollowRandom(action.payload));
      yield put(AuthActions.getUserInfo());
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postFollowListFollowerSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.postFollow, action.payload);
    if (data.code == 200) {
      yield put(UserAction.handleSuccerPostFollowListFollower(action.payload));
      yield put(AuthActions.getUserInfo());
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getAllUserSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getAllUser);
    if (data.code == 200) {
      yield put(UserAction.setListUser(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getUserByIdSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getUserById, action.payload);
    if (data.code == 200) {
      yield put(UserAction.setUserById(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getPostByUserSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      UserService.getListPostByUser,
      action.payload,
    );
    if (data.code == 200) {
      yield put(UserAction.setListPostByUser(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
  }
}

function* getPostAllByIdUserSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      UserService.getListAllPostByIdUser,
      action.payload,
    );
    if (data.code == 200) {
      console.log(data.data);
      yield put(UserAction.setListAllPostByIdUser(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
  }
}

function* getPostByIdSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getPostById, action.payload);
    if (data.code == 200) {
      yield put(UserAction.setPostById(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* putSummarySaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.putSummary, action.payload);
    if (data.code == 200) {
      yield put(AuthActions.handleSucessSummary(action.payload));
      NavigationService.navigate(routes.MYPROFILE);
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getListFollowSaga(action: any): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getFollow);
    if (data.code == 200) {
      yield put(UserAction.setListFollow(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* deleteFollowerSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.deleteFollow, action.payload);
    if (data.code == 200) {
      yield put(UserAction.handleDeleteFollowerSuccess(action.payload));
      yield put(AuthActions.getUserInfo());
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getListUserRandomSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.getUserRandom);
    if (data.code == 200) {
      yield put(AuthActions.getUserInfo());
      yield put(UserAction.setListUserRandom(data));
      yield put(UserAction.deleteSameUserRandom(action.payload));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
// Change password
function* changePasswordSaga(action: any): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.changePassword, action.payload);
    console.log('data =================', data);
    if (data.code == 200) {
      NavigationService.navigate(routes.MYPROFILE);
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

export default function* watchUserSaga() {
  yield takeLatest(UserAction.postFollow.type, postFollowSaga);
  yield takeLatest(UserAction.getListUser.type, getAllUserSaga);
  yield takeLatest(UserAction.getUserById.type, getUserByIdSaga);
  yield takeLatest(UserAction.getListPostByUser.type, getPostByUserSaga);
  yield takeLatest(UserAction.getPostById.type, getPostByIdSaga);
  yield takeLatest(UserAction.putSummary.type, putSummarySaga);
  yield takeLatest(UserAction.getListFollow.type, getListFollowSaga);
  yield takeLatest(UserAction.getUserRandom.type, getListUserRandomSaga);
  yield takeLatest(UserAction.deleteFollwer.type, deleteFollowerSaga);
  yield takeLatest(
    UserAction.getListAllPostByIdUser.type,
    getPostAllByIdUserSaga,
  );
  yield takeLatest(UserAction.postFollowRandom.type, postFollwRandom);
  yield takeLatest(
    UserAction.postFollowListFollower,
    postFollowListFollowerSaga,
  );
  yield takeLatest(UserAction.changePassword.type, changePasswordSaga);
}
