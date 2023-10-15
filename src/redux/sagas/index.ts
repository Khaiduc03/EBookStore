import {all, fork} from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';
import watchComicSaga from './comic.saga';
import watchTopicSaga from './topic.saga';

export default function* RootSaga() {
  yield all([fork(watchAuthSaga), fork(watchComicSaga), fork(watchTopicSaga)]);
}
