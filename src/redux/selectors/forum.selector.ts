import {RootState} from '../store';

export const getListForum = (state: RootState) =>
  state.forum.listDataForum?.data;

export const getCurrentPageForum = (state: RootState) =>
  state.forum.listDataForum?.currentPage;

export const getNextForum = (state: RootState) =>
  state.forum.listDataForum?.canNext;

export const getCountCommentForum = (state: RootState) =>
  state.forum.listDetail?.totalComment;
