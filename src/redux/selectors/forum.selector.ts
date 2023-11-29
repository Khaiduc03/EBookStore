import {RootState} from '../store';
import {ForumType} from '../types/forum.type';

export const getListForum = (state: RootState) =>
  state.forum.listDataForum?.data;

export const getCurrentPageForum = (state: RootState) =>
  state.forum.listDataForum?.currentPage;

export const getNextForum = (state: RootState) =>
  state.forum.listDataForum?.canNext;
