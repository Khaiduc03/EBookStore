import {call, put, takeLatest} from 'redux-saga/effects';
import {RatingService} from '../services';
import {PayloadAction} from '@reduxjs/toolkit';
import {RatingActions} from '../reducer/rating.reducer';

function* getListDataRatingSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(RatingService.getListRating, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(RatingActions.setListRating(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  }
}

function* getChartRatingSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      RatingService.getChartRating,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(RatingActions.setRatingChart(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* watchRatingSaga() {
  yield takeLatest(RatingActions.getListRating.type, getListDataRatingSaga);
  yield takeLatest(RatingActions.getRatingChart.type, getChartRatingSaga);
}
