import {RootState} from '../store';

export const getListComic = (state: RootState) => state.comic.listData?.data;
export const getTotalPage = (state: RootState) =>
  state.comic.listData?.totalPage;
export const getCurrentPageHome = (state: RootState) =>
  state.comic.listData?.currentPage;
export const getNextPage = (state: RootState) => state.comic.listData?.canNext;

export const getDetailComic = (state: RootState) =>
  state.comic.detailData?.data;

export const getDataByTopic = (state: RootState) =>
  state.comic.listDataByTopic?.data;

export const getDataByTopicMore = (state: RootState) =>
  state.comic.listDataByTopicMore?.data;
export const getNextTopic = (state: RootState) =>
  state.comic.listDataByTopic?.canNext;

export const getCurrentTopic = (state: RootState) =>
  state.comic.listDataByTopic?.currentPage;

export const getDataAllChapter = (state: RootState) =>
  state.comic.listChapter?.data;

export const getDataDetailChapter = (state: RootState) =>
  state.comic.listDetailChapter?.data_chapter;

export const getDataComicBySeacrh = (state: RootState) =>
  state.comic.listDataBySearch?.data;

export const getNextSearch = (state: RootState) =>
  state.comic.listDataBySearch?.canNext;

export const getTotalSearch = (state: RootState) =>
  state.comic.listDataBySearch?.totalPage;

export const getCurrentSearch = (state: RootState) =>
  state.comic.listDataBySearch?.currentPage;
export const getNextChapter = (state: RootState) =>
  state.comic.listDetailChapter?.next_chapter;
export const getPreviousChapter = (state: RootState) =>
  state.comic.listDetailChapter?.previous_chapter;

export const getCountComment = (state: RootState) =>
  state.comic.listDetailChapter?.totalComment;

export const getListTopView = (state: RootState) =>
  state.comic.listTopView?.data;

export const getListTopRating = (state: RootState) =>
  state.comic.listTopRating?.data;

export const getListTopFavorite = (state: RootState) =>
  state.comic.listTopFavorite?.data;

export const getListFavorite = (state: RootState) =>
  state.comic.listFavorite?.data;

export const nextPageFavorite = (state: RootState) =>
  state.comic.listFavorite?.canNext;

export const currentPageFavorite = (state: RootState) =>
  state.comic.listFavorite?.currentPage;

