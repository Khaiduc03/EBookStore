import {RootState} from '../store';

export const getListCommentForum = (state: RootState) =>
  state.commentForum.listComment?.data;

export const getTotalCommentForum = (state: RootState) =>
  state.commentForum.listComment?.totalData;

export const getNextPageCommentForum = (state: RootState) =>
  state.commentForum.listComment?.canNext;

export const getCurrenPageCommentForum = (state: RootState) =>
  state.commentForum.listComment?.currentPage;

export const getListRepCommentForum = (state: RootState) =>
  state.commentForum.listRepComment?.data;

export const getTotaRepComment = (state: RootState) =>
  state.commentForum.listRepComment?.totalData;

export const getNextPageRepCommentForum = (state: RootState) =>
  state.commentForum.listRepComment?.canNext;

export const getCurrenPageRepCommentForum = (state: RootState) =>
  state.commentForum.listRepComment?.currentPage;
