import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {UserService} from '../services';
import {UserAction} from '../reducer/user.reducer';

function* postFollowSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run===========>');
    const {data}: any = yield call(UserService.postFollow, action.payload);
    if (data.code == 200) {
      console.log(data);
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log('hihi');
  } finally {
  }
}

export default function* watchUserSaga() {
  yield takeLatest(UserAction.postFollow.type, postFollowSaga);
}
