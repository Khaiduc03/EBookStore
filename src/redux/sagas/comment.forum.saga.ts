import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';
import {CommentChapterAction} from '../reducer/comment.chapter.reducer';
import {ComicActions, ForumActions, LoadingActions} from '../reducer';
import {CommentForumService} from '../services/comment.forum.service';
import {CommentForumAction} from '../reducer/comment.forum.reducer';
import {CommentForumType} from '../types/comment.forum.type';

function* postCommentSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.postCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log(data.data);
      yield put(CommentForumAction.postCommentForumSucces(data.data));
      yield put(ComicActions.setCountComment());
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

function* postLikeCommentSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.postLikeCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      } else {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      }
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

function* deleteLikeCommentSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.deleteLikeCommentForum,
      action.payload,
    );
    console.log(data);
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      } else {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      }
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

function* postRepCommentSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.postRepCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      yield put(CommentForumAction.postRepCommentForumSucces(data.data));
      yield put(ForumActions.setCountComment());
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

function* getCommentForumSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingPage());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.getCommentForum,
      action.payload,
    );
    console.log('getCommentForumSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.setCommentForum(data.data));
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

function* getRepCommentForumSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoadingPage());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.getRepCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      yield put(CommentForumAction.setRepCommentForum(data.data));
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
  yield takeLatest(CommentForumAction.postCommentForum.type, postCommentSaga);
  yield takeLatest(
    CommentForumAction.getCommentForum.type,
    getCommentForumSaga,
  );

  yield takeLatest(
    CommentForumAction.postRepCommentForum.type,
    postRepCommentSaga,
  );

  yield takeLatest(
    CommentForumAction.postLikeCommentForum.type,
    postLikeCommentSaga,
  );
  yield takeLatest(
    CommentForumAction.deleteLikeCommentForum.type,
    deleteLikeCommentSaga,
  );

  yield takeLatest(
    CommentForumAction.getRepCommentForum.type,
    getRepCommentForumSaga,
  );
}
