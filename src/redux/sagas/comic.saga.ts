import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ComicActions, ComicReducer, LoadingActions} from '../reducer';
import {ComicService} from '../services';

function* getListDataSaga(action: PayloadAction<number>): Generator {
  yield put(LoadingActions.showLoadingPage());
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
    yield put(LoadingActions.hideLoadingPage());
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
  yield put(LoadingActions.showLoadingTopic());

  try {
    const {data}: any = yield call(
      ComicService.getComicByTopic,
      action.payload,
    );

    if (data.code === 200) {
      yield put(ComicActions.setListByTopic(data.data));
    } else {
      console.log('Lỗi từ máy chủ !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
  }
}

function* getChapterByComicSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoadingMain());
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
    yield put(LoadingActions.hideLoadingMain());
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
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run');
    const {data}: any = yield call(
      ComicService.getComicBySearch,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListBySeacrch(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
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

function* getComicByTop20Saga(): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getComicByTopView);
    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setListTopView(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* postFavoriteSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.postFavorite, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setPostFavorite(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* deleteFavoriteSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.deleteFavorite, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setPostFavorite(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* checkFavoriteSaga(action: PayloadAction<string>): Generator {
  yield put(LoadingActions.showLoading());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.checkFavorite, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      console.log(data);
      yield put(ComicActions.setPostFavorite(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoading());
  }
}

function* getListFavoriteSaga(action: PayloadAction<number>): Generator {
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run');
    const {data}: any = yield call(
      ComicService.getListFavorite,
      action.payload,
    );
    if (data.code == 200) {
      console.log('run push tookit');

      yield put(ComicActions.setListFavorite(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
  }
}

function* getListHistoryComicSaga(action: PayloadAction<number>): Generator {
  yield put(LoadingActions.showLoadingTopic());
  try {
    console.log('run');
    const {data}: any = yield call(ComicService.getListHistory, action.payload);
    if (data.code == 200) {
      console.log('run push tookit');
      yield put(ComicActions.setListHistotyComic(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(LoadingActions.hideLoadingTopic());
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
  yield takeLatest(ComicActions.getListTopView, getComicByTop20Saga);
  yield takeLatest(ComicActions.postFavorite, postFavoriteSaga);
  yield takeLatest(ComicActions.deleteFavorite, deleteFavoriteSaga);
  yield takeLatest(ComicActions.checkFavorite, checkFavoriteSaga);
  yield takeLatest(ComicActions.getListFavorite, getListFavoriteSaga);
  yield takeLatest(ComicActions.getListHistotyComic, getListHistoryComicSaga);
}
