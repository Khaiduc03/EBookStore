import {routes} from '../../../constants';
import {Screen} from '../../../types';
import MessageScreen from './Message';

export {default as Chat} from './Chat';

export const messageScreens: Screen[] = [
  {
    name: routes.MESSAGE,
    component: MessageScreen,
  },
];
