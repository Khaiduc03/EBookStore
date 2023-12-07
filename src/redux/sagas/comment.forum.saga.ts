import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';
import {CommentChapterAction} from '../reducer/comment.chapter.reducer';
import {ComicActions, ForumActions, LoadingActions} from '../reducer';
import {CommentForumService} from '../services/comment.forum.service';
import {CommentForumAction} from '../reducer/comment.forum.reducer';
import {CommentForumType} from '../types/comment.forum.type';
import {PayloadHttpListCommentData} from '../types/comment.chapter.type';

function* postCommentSaga(action: PayloadAction<any>): Generator {
  // yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.postCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log('postCommentSaga: ======================>', data.data);
      yield put(CommentForumAction.postCommentForumSucces(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(LoadingActions.hideLoading());
  }
}

function* getCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.getCommentForum,
      action.payload,
    );
    console.log('getCommentSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.setCommentForum(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postLikeCommentSaga(action: PayloadAction<any>): Generator {
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
  }
}

function* deleteLikeCommentSaga(action: PayloadAction<any>): Generator {
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
  }
}

function* postRepCommentSaga(action: PayloadAction<any>): Generator {
  // yield put(LoadingActions.showLoading());
  try {
    console.log('run===========>');
    const {data}: any = yield call(
      CommentForumService.postRepCommentForum,
      action.payload,
    );
    console.log('postRepCommentSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.postRepCommentForumSucces(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    // yield put(LoadingActions.hideLoading());
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

function* deleteCommentSaga(action: PayloadAction<any>): Generator {
  try {
    const {data}: any = yield call(
      CommentForumService.deleteCommentForum,
      action.payload,
    );

    if (data.code == 200) {
      yield put(CommentForumAction.handleDeleteCommentSuccess(action.payload));
    } else {
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Any cleanup code if needed
  }
}

export default function* watchCommentChapterSaga() {
  yield takeLatest(CommentForumAction.postCommentForum, postCommentSaga);
  yield takeLatest(CommentForumAction.getCommentForum, getCommentSaga);

  yield takeLatest(
    CommentForumAction.postLikeCommentForum,
    postLikeCommentSaga,
  );
  yield takeLatest(
    CommentForumAction.deleteLikeCommentForum,
    deleteLikeCommentSaga,
  );

  yield takeLatest(
    CommentForumAction.postRepCommentForum.type,
    postRepCommentSaga,
  );

  yield takeLatest(
    CommentForumAction.getRepCommentForum.type,
    getRepCommentForumSaga,
  );

  yield takeLatest(CommentForumAction.deleteCommentForum, deleteCommentSaga);
}
