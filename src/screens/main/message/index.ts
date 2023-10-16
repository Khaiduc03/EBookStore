import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Chat from './Chat';
import Message from './Messages';

export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: Chat,
  },
  {
    name: routes.MESSAGES,
    component: Message,
  },
];
