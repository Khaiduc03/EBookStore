import {PayloadAction} from '@reduxjs/toolkit';
import {ForumType, PayloadHttpListForum} from '../types/forum.type';
import {ForumActions, LoadingActions} from '../reducer';
import {ForumService} from '../services/forum.service';
import {call, put, takeLatest} from 'redux-saga/effects';

function* getListDataForumSaga(action: PayloadAction<number>): Generator {
  if (action.payload == 1) {
    yield put(LoadingActions.showLoadingStart());
  } else {
    yield put(LoadingActions.showLoadingPage());
  }
  try {
    console.log('run');
    const dataForum: any = yield call(ForumService.getAllForum, action.payload);
    // console.log('dataForum ', dataForum.data.data['data']);
    if (dataForum.data.code == 200) {
      console.log('run push tookit');
      yield put(ForumActions.setListData(dataForum.data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('hihi');
  } finally {
    if (action.payload == 1) {
      yield put(LoadingActions.hideLoadingStart());
    } else {
      yield put(LoadingActions.hideLoadingPage());
    }
  }

  console.log('action.payload: ', action.payload);
}

function* likePostForumSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    console.log('run');
    const {data}: any = yield call(ForumService.postLikeForum, action.payload);
    console.log('data: ', data);
    if (data.code == 200) {
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('error: ', error);
  } finally {
  }
  // console.log('action.payload: ', action.payload);
}

function* unlikePostForumSaga(
  action: PayloadAction<string>,
): Generator<any, void, any> {
  try {
    console.log('run');
    const {data}: any = yield call(
      ForumService.deleteLikeForum,
      action.payload,
    );
    console.log('data: ', data);
    if (data.code == 200) {
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('error: ', error);
  } finally {
  }

  // console.log('action.payload: ', action.payload);
}

function* postCreatePostForumSaga(
  action: PayloadAction<FormData>,
): Generator<any, void, any> {
  try {
    console.log('run');
    console.log('sagaaaaaa: ', action.payload);
    const {data}: any = yield call(
      ForumService.postCreatePostForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log('data=============: ', data);
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
  }
}

export default function* watchForumSaga() {
  yield takeLatest(ForumActions.handleGetListData.type, getListDataForumSaga);
  yield takeLatest(
    ForumActions.handleLike_UnlikeSuccess.type,
    likePostForumSaga,
  );
  yield takeLatest(
    ForumActions.handleLike_UnlikeSuccess.type,
    unlikePostForumSaga,
  );
  yield takeLatest(
    ForumActions.handleCreatePostSuccess.type,
    postCreatePostForumSaga,
  );
}
