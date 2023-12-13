import {routes} from '../../../constants';
import {Screen} from '../../../types';
import TopScreen from './Explore/Components/TopScreen';
import TopViewComic from './Explore/Components/TopViewComic';

export {default as Explore} from './Explore';

export const exploreScreens: Screen[] = [
  {
    name: routes.VIEW_EXPLORE,
    component: TopViewComic,
  },
  {
    name: routes.TOP_SCREEN,
    component: TopScreen,
  },
];
