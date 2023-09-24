import {routes} from '../../../constants';
import {Screen} from '../../../types';
import ComicFavorite from './Bookmark/ComicFavorite';
import SearchBookMark from './Bookmark/Search';

export {default as Bookmark} from './Bookmark';

export const bookmarkScreens: Screen[] = [
  {
    name: routes.SEARCHBOOKMARK,
    component: SearchBookMark,
  },
  {
    name: routes.COMICFAVORITE,
    component: ComicFavorite,
  },
];
