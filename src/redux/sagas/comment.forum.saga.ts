import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ForumActions, LoadingActions } from '../reducer';
import { CommentForumAction } from '../reducer/comment.forum.reducer';
import { CommentForumService } from '../services/comment.forum.service';

function* postCommentSaga(action: PayloadAction<any>): Generator {
  try {
    yield put(LoadingActions.showLoading());
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.postCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log('postCommentSaga: ======================>', data.data);
      yield put(CommentForumAction.postCommentForumSucces(data.data));
      yield put(ForumActions.handleSuccessCount(action.payload.forum_uuid));
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

function* getCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
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
    const { data }: any = yield call(
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
    const { data }: any = yield call(
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
  try {
    yield put(LoadingActions.showLoading());
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.postRepCommentForum,
      action.payload,
    );
    console.log('postRepCommentSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.postRepCommentForumSucces(data.data));
      yield put(ForumActions.handleSuccessCount(action.payload.forum_uuid));
      yield put(ForumActions.incrementCountComment());
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

function* getRepCommentForumSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
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
  }
}

function* deleteCommentSaga(action: PayloadAction<any>): Generator {
  try {
    yield put(LoadingActions.showLoading());
    const { data }: any = yield call(
      CommentForumService.deleteCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      yield put(
        CommentForumAction.handleDeleteCommentSuccess(
          action.payload.comment_uuid,
        ),
      );
      yield put(ForumActions.handleDecreaseCount(action.payload.forum_uuid));
    } else {
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

// function* deleteRepCommentSaga(action: PayloadAction<any>): Generator {
//   try {
//     yield put(LoadingActions.showLoading());
//     const { data }: any = yield call(
//       CommentForumService.deleteCommentForum,
//       action.payload,
//     );
//     if (data.code == 200) {
//       yield put(
//         CommentForumAction.handleDeleteRepCommentSuccess(action.payload),
//       );
//       yield put(CommentForumAction.reduceCountRep(action.payload));
//       yield put(ForumActions.handleDecreaseCount(action.payload.forum_uuid));
//       yield put(ForumActions.reducerCountComment());
//     } else {
//       console.log('Server error !!!');
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     yield put(LoadingActions.hideLoading());
//   }
// }

export default function* watchCommentForumSaga() {
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

  yield takeLatest(CommentForumAction.postRepCommentForum, postRepCommentSaga);

  yield takeLatest(
    CommentForumAction.getRepCommentForum,
    getRepCommentForumSaga,
  );

  yield takeLatest(CommentForumAction.deleteCommentForum, deleteCommentSaga);
  // yield takeLatest(
  //   CommentForumAction.deleteRepCommentForum,
  //   deleteRepCommentSaga,
  // );
}
