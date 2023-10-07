import {all, fork} from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';
import watchComicSaga from './comic.saga';

export default function* RootSaga() {
  yield all([fork(watchAuthSaga), fork(watchComicSaga)]);
}
