import {call, put, takeLatest} from 'redux-saga/effects';
import {TopicActions, LoadingActions} from '../reducer';
import {TopicService} from '../services';

function* getListDataTopic(action: any): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(TopicService.getTopic);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(TopicActions.setListTopic(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* watchTopicSaga() {
  yield takeLatest(TopicActions.getListTopic.type, getListDataTopic);
}
