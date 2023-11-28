import {RootState} from '../store';

export const getUuidPostFavorite = (state: RootState) =>
  state.comic.dataPostFavorite?.data?.uuid;

export const getCodePostFavorite = (state: RootState) =>
  state.comic.dataPostFavorite?.code;

export const getListHistory = (state: RootState) =>
  state.comic.listHistoryComic?.data;
export const nextPageHistory = (state: RootState) =>
  state.comic.listHistoryComic?.canNext;
export const currentPageHistory = (state: RootState) =>
  state.comic.listHistoryComic?.currentPage;
