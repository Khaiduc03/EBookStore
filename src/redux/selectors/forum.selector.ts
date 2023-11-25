import {RootState} from '../store';

export const getListForum = (state: RootState) =>
  state.forum.listDataForum?.data;

export const likePostForum = (state: RootState) =>
  state.forum.listDataForum?.data?.findIndex(index => index.uuid.toString());
