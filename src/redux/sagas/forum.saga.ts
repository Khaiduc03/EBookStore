import {PayloadAction} from '@reduxjs/toolkit';
import {call, delay, put, takeLatest} from 'redux-saga/effects';
import {CustomToastBottom} from '../../utils';
import {ForumActions, LoadingActions} from '../reducer';
import {ForumService} from '../services/forum.service';

function* getListDataForumSaga(action: PayloadAction<number>): Generator {
  if (action.payload === 1) {
    yield put(LoadingActions.showLoadingStart());
  } else {
    yield put(LoadingActions.showLoadingForum());
  }
  try {
    console.log('run');
    const {data}: any = yield call(ForumService.getAllForum, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ForumActions.setListData(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('error: ', error);
  } finally {
    if (action.payload === 1) {
      yield put(LoadingActions.hideLoadingStart());
    } else {
      yield delay(2000);
      yield put(LoadingActions.hideLoadingForum());
    }
  }
}

function* PostLikeForumSaga(
  action: PayloadAction<any>,
): Generator<any, void, any> {
  try {
    console.log('run');
    const {data}: any = yield call(ForumService.postLikeForum, action.payload);
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          ForumActions.handleLike_UnlikeSuccess(action.payload.forum_uuid),
        );
      } else {
        yield put(
          ForumActions.handleLike_UnlikeSuccess(action.payload.forum_uuid),
        );
      }
      console.log('run push tookit');
    }
  } catch (error) {
    console.log('error: ', error);
  } finally {
  }
}

function* DeleteLikeForumSaga(
  action: PayloadAction<any>,
): Generator<any, void, any> {
  try {
    console.log('run');
    const {data}: any = yield call(
      ForumService.deleteLikeForum,
      action.payload,
    );
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          ForumActions.handleLike_UnlikeSuccess(action.payload.forum_uuid),
        );
      } else {
        yield put(
          ForumActions.handleLike_UnlikeSuccess(action.payload.forum_uuid),
        );
      }
      console.log('run push tookit');
    }
  } catch (error) {
    console.log('error: ', error);
  } finally {
  }
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
      yield put(ForumActions.postCreatePost(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
  }
}

function* deletePostForumSaga(
  action: PayloadAction<any>,
): Generator<any, void, any> {
  try {
    console.log(action.payload.forum_uuid);
    // yield put(ForumActions.deletePostRefesh(action.payload.forum_uuid));
    const {data}: any = yield call(
      ForumService.deletePostForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log('data=============: ', data);
      yield put(ForumActions.deletePostRefesh(action.payload.forum_uuid));
    } else {
      CustomToastBottom('No, Your post cannot be deleted.');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
  }
}

export default function* watchForumSaga() {
  yield takeLatest(ForumActions.getListData.type, getListDataForumSaga);
  yield takeLatest(ForumActions.getListData, PostLikeForumSaga);
  yield takeLatest(ForumActions.getListData, DeleteLikeForumSaga);
  yield takeLatest(
    ForumActions.handleCreatePostSuccess.type,
    postCreatePostForumSaga,
  );
  yield takeLatest(ForumActions.deletePost.type, deletePostForumSaga);
}
