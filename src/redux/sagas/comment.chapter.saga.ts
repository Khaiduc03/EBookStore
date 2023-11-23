import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';
import {CommentChapterAction} from '../reducer/comment.chapter.reducer';
import {CommentChapterService} from '../services/comment.chapter.service';
import {LoadingActions} from '../reducer';

function* postCommentSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentChapterService.postCommentChapter,
      action.payload,
    );
    if (data.code == 200) {
      console.log(data.data);
      yield put(CommentChapterAction.posCommentChapterSucces(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getCommentComicSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingPage());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentChapterService.getCommentChapter,
      action.payload,
    );
    if (data.code == 200) {
      yield put(CommentChapterAction.setCommentChapter(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingPage());
  }
}

export default function* watchCommentChapterSaga() {
  yield takeLatest(
    CommentChapterAction.postCommentChapter.type,
    postCommentSaga,
  );
  yield takeLatest(
    CommentChapterAction.getCommentChapter.type,
    getCommentComicSaga,
  );
}
