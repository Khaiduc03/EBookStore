import {call, put, takeLatest} from 'redux-saga/effects';
import {RatingService} from '../services';
import {PayloadAction} from '@reduxjs/toolkit';
import {RatingActions} from '../reducer/rating.reducer';
import {LoadingActions} from '../reducer';
import {pull} from 'lodash';
import {NavigationService} from '../../navigation';
import {routes} from '../../constants';
import {ToastAndroid} from 'react-native';

function* getListDataRatingSaga(action: PayloadAction<string>): Generator {
  try {
    yield put(LoadingActions.showLoading());
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
  } finally {
    yield put(LoadingActions.hideLoading());
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
  } finally {
  }
}

function* likeRatingSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(RatingService.likeRating, action.payload);
    if (data.code == 200) {
      // yield put(RatingActions.handleSuccerLikeRating(action.payload));
      console.log(data);
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* unLikeRatingSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(RatingService.unLikeRating, action.payload);
    if (data.code == 200) {
      // yield put(RatingActions.handleSuccerLikeRating(action.payload));
      console.log(data);
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postRatingSaga(action: PayloadAction<any>): Generator {
  try {
    yield put(LoadingActions.showLoading());
    console.log('run');
    const {data}: any = yield call(RatingService.postRating, action.payload);
    if (data.code == 200) {
      yield put(RatingActions.postRatingSuccess(data.data));
      NavigationService.navigate(routes.RATINGCOMICSCREEN, {
        uuid: action.payload.comic_uuid,
      });
      console.log(data);
      console.log('run push tookit');
    } else {
      ToastAndroid.show('You can only rate once !!!', ToastAndroid.SHORT);
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* deleteRatingSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(RatingService.deleteRating, action.payload);
    if (data.code == 200) {
      yield put(RatingActions.deleteRatingSucces(action.payload));
      console.log(data);
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default function* watchRatingSaga() {
  yield takeLatest(RatingActions.getListRating.type, getListDataRatingSaga);
  yield takeLatest(RatingActions.getRatingChart.type, getChartRatingSaga);
  yield takeLatest(RatingActions.likeRating.type, likeRatingSaga);
  yield takeLatest(RatingActions.unLikeRating.type, unLikeRatingSaga);
  yield takeLatest(RatingActions.deleteRating.type, deleteRatingSaga);
  yield takeLatest(RatingActions.postRating.type, postRatingSaga);
}
