import {RootState} from '../store';

export const getListComic = (state: RootState) =>
  state.comic.listData?.data?.data;
export const getTotalPage = (state: RootState) =>
  state.comic.listData?.data?.totalPage;

export const getNextPage = (state: RootState) =>
  state.comic.listData?.data?.canNext;

export const getDetailComic = (state: RootState) =>
  state.comic.detailData?.data;

export const getDataByTopic = (state: RootState) =>
  state.comic.listDataByTopic?.data;

export const getDataAllChapter = (state: RootState) =>
  state.comic.listChapter?.chapter;

export const getDataDetailChapter = (state: RootState) =>
  state.comic.listDetailChapter?.data;
