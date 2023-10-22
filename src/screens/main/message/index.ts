import {routes} from '../../../constants';
import {Screen} from '../../../types';
import ChatScreen from './Chat';
import Message from './Message';

export {default as Chat} from './Chat';
export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: ChatScreen,
  },
  {
    name: routes.MESSAGE,
    component: Message,
  },
];
