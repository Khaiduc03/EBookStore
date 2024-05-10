import {routes} from '../../../constants';
import {Screen} from '../../../types';
import ChapterDetail from './ChapterDetail';
import ComicByTopic from './ComicByTopic';
import ComicsDetail from './ComicsDetail';
import CommentComic from './CommentComic';
import Filters from './Filters';
import Notifications from './Notifications';
import RatingComicScreen from './RatingComicScreen';
import RatingDetailComic from './RatingDetailComic';
import CommentRepComic from './RepComments';
import Search from './Search';
import Settings from './Settings';
import TopViewComic from './TopViewComic';
import Topics from './Topics';

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
    component: Notifications,
  },
  {
    name: routes.FILTERS,
    component: Filters,
  },
  {
    name: routes.COMMENT_REP,
    component: CommentRepComic,
  },
  {
    name: routes.TREDING_COMIC,
    component: TopViewComic,
  },
  {
    name: routes.SETTINGS,
    component: Settings,
  },
  {
    name: routes.RATINGCOMICSCREEN,
    component: RatingComicScreen,
  },
  {
    name: routes.RATINGDETAILCOMIC,
    component: RatingDetailComic,
  },
];
