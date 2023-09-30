import {put, takeLatest} from 'redux-saga/effects';
import {AppActions, LoadingActions} from '../reducer';

function* appSaga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    yield put(AppActions.setReady());
  } catch (error: any) {
    console.log('Have error at get profile saga: ' + error.message);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(AppActions.handleReady.type, appSaga);
}
