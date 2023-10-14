import {RootState} from '../store';

export const getListComic = (state: RootState) => state.comic.listData?.comics;
