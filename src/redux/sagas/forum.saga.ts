import {PayloadAction} from '@reduxjs/toolkit';
import {ForumType, PayloadHttpListForum} from '../types/forum.type';
import {ForumActions, LoadingActions} from '../reducer';
import {ForumService} from '../services/forum.service';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getListDataForumSaga(action: PayloadAction<number>): Generator {
  // if (action.payload == 1) {
  //   yield put(LoadingActions.showLoadingStart());
  // } else {
  //   yield put(LoadingActions.showLoadingPage());
  // }
  try {
    console.log('run');
    const data: any = yield call(ForumService.getAllForum, action.payload);
    // console.log('dataSagaForum ', data?.data.data['data']);
    if (data.data.code == 200) {
      console.log('run push tookit');
      yield put(ForumActions.setListData(data?.data?.data['data']));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('hihi');
  } finally {
    // if (action.payload == 1) {
    //   yield put(LoadingActions.hideLoadingStart());
    // } else {
    //   yield put(LoadingActions.hideLoadingPage());
    // }
  }

  console.log('action.payload: ', action.payload);
}

export default function* watchForumSaga() {
  yield takeLatest(ForumActions.handleGetListData.type, getListDataForumSaga);
}
