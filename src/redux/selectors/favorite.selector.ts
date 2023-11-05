import {RootState} from '../store';

export const getUuidPostFavorite = (state: RootState) =>
  state.comic.dataPostFavorite?.data?.uuid;

export const getCodePostFavorite = (state: RootState) =>
  state.comic.dataPostFavorite?.code;
