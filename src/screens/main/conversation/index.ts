import {routes} from '../../../constants';
import {Screen} from '../../../types';
import MessageScreen from './Messages1';

export {default as Conversation} from './Conversation';
export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: MessageScreen,
  },
];
