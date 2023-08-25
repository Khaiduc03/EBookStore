import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Topics from './Home/Topics';

export {default as Home} from './Home';
export const homeScreens: Screen[] = [
  {
    name: routes.TOPICS,
    component: Topics,
  },
];
