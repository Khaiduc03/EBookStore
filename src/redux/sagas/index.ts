import { all, fork } from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';


export default function* RootSaga() {
  yield all([fork(watchAuthSaga)]);
}
