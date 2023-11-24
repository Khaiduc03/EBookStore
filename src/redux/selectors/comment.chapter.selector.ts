import {RootState} from '../store';

export const getListComment = (state: RootState) =>
  state.commetChapter.listComment?.data;

export const getTotaComment = (state: RootState) =>
  state.commetChapter.listComment?.totalData;

export const getNextPageCommentChapter = (state: RootState) =>
  state.commetChapter.listComment?.canNext;

export const getCurrenPageCommentChapter = (state: RootState) =>
  state.commetChapter.listComment?.currentPage;

export const getListRepCommentChapter = (state: RootState) =>
  state.commetChapter.listRepComment?.data;

export const getTotaRepComment = (state: RootState) =>
  state.commetChapter.listRepComment?.totalData;

export const getNextPageRepCommentChapter = (state: RootState) =>
  state.commetChapter.listRepComment?.canNext;

export const getCurrenPageRepCommentChapter = (state: RootState) =>
  state.commetChapter.listRepComment?.currentPage;
