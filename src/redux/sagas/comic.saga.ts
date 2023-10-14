import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ComicActions, ComicReducer, LoadingActions} from '../reducer';
import {ComicService} from '../services';

function* getListDataSaga(action: PayloadAction<number>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getComic, action.payload);
    console.log(action);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListData(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//watch saga runn
export default function* watchComicSaga() {
  yield takeLatest(ComicActions.getListData.type, getListDataSaga);
}
