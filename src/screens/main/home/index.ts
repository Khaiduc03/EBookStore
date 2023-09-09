import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Topics from './Topics';
import Search from './Search';

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
];
