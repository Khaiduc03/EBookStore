import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ComicActions, ComicReducer, LoadingActions} from '../reducer';
import {ComicService} from '../services';

function* getListDataSaga(action: PayloadAction<number>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getComic, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListData(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}
function* getComicById(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getComicById, action.payload);

    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setDetailComic(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getListComicByTopicSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');

    const {data}: any = yield call(
      ComicService.getComicByTopic,
      action.payload,
    );

    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListByTopic(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getChapterByComicSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(
      ComicService.getAllChapterByComic,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListChapter(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getDetailChapterSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getChapterById, action.payload);

    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListChapterDetail(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getDataComicBySearchSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(
      ComicService.getComicBySearch,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListBySeacrch(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getDataChapterNavSaga(action: PayloadAction<any>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(
      ComicService.getChapterByNav,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setListChapterDetail(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

//watch saga runn
export default function* watchComicSaga() {
  yield takeLatest(ComicActions.getListData.type, getListDataSaga);
  yield takeLatest(ComicActions.getDetailComic.type, getComicById);
  yield takeLatest(ComicActions.getListByTopic.type, getListComicByTopicSaga);
  yield takeLatest(ComicActions.getListChapter.type, getChapterByComicSaga);
  yield takeLatest(
    ComicActions.getListChapterDetail.type,
    getDetailChapterSaga,
  );
  yield takeLatest(ComicActions.getListBySearch.type, getDataComicBySearchSaga);
  yield takeLatest(ComicActions.getListDetailChapterNav, getDataChapterNavSaga);
}
