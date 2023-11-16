import {routes} from '../../../constants';
import {Screen} from '../../../types';
import MessageScreen from './Messages';

export {default as Conversation} from './Conversation';
export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: MessageScreen,
  },
];
