import {all, fork} from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';
import watchComicSaga from './comic.saga';
import watchTopicSaga from './topic.saga';
import watchChatSaga from './chat.saga';
import watchForumSaga from './forum.saga';
import watchUserSaga from './user.saga';
import watchCommentChapterSaga from './comment.chapter.saga';

export default function* RootSaga() {
  yield all([
    fork(watchAuthSaga),
    fork(watchComicSaga),
    fork(watchTopicSaga),
    fork(watchChatSaga),
    fork(watchForumSaga),
    fork(watchUserSaga),
    fork(watchCommentChapterSaga),
  ]);
}
