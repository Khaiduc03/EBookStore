import {routes} from '../../../constants';
import {Screen} from '../../../types';
import TopViewComic from './Explore/Components/TopViewComic';

export {default as Explore} from './Explore';

export const exploreScreens: Screen[] = [
  {
    name: routes.VIEW_EXPLORE,
    component: TopViewComic,
  },
];
