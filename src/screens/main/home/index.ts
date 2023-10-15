import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Topics from './Topics';
import Search from './Search';
import ComicByTopic from './ComicByTopic';
import ComicsDetail from './ComicsDetail';
import ChapterDetail from './ChapterDetail';
import Chat from '../message/Chat';

export {default as Home} from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.TOPICS,
    component: Topics,
  },
  {
    name: routes.SEARCH,
    component: Search,
  },
  {
    name: routes.COMICBYTOPIC,
    component: ComicByTopic,
  },
  {
    name: routes.COMICDETAIL,
    component: ComicsDetail,
  },
  {
    name: routes.CHAPTER,
    component: ChapterDetail,
  },
];
