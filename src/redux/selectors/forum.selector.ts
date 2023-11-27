import {RootState} from '../store';
import {ForumType} from '../types/forum.type';

export const getListForum = (state: RootState) =>
  state.forum.listDataForum?.data;
