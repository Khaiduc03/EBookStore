import {RootState} from '../store';

export const getListComic = (state: RootState) => state.comic.listData?.comics;

export const getDetailComic = (state: RootState) =>
  state.comic.detailData?.data;

export const getDataByTopic = (state: RootState) =>
  state.comic.listDataByTopic?.data;
