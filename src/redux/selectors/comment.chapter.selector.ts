import {RootState} from '../store';

export const getListComment = (state: RootState) =>
  state.commetChapter.listComment?.data;

export const getTotaComment = (state: RootState) =>
  state.commetChapter.listComment?.totalData;

export const getNextPageCommentChapter = (state: RootState) =>
  state.commetChapter.listComment?.canNext;

export const getCurrenPageCommentChapter = (state: RootState) =>
  state.commetChapter.listComment?.currentPage;
