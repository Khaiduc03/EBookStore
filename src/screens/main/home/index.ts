import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Topics from './Topics';
import Search from './Search';
import ComicByTopic from './ComicByTopic';
import ComicsDetail from './ComicsDetail';
import ChapterDetail from './ChapterDetail';
import CommentComic from './CommentComic';
import NotificationsScreen from './notifications';
import Filters from './filters/Filters';

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
  {
    name: routes.COMMENT_COMIC,
    component: CommentComic,
  },
  {
    name: routes.NOTIFICATIONS,
    component: NotificationsScreen,
  },
  {
    name: routes.FILTERS,
    component: Filters,
  },
];
