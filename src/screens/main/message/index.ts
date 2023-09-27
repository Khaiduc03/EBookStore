import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Chat from './Chat';
import Messages from './Messages';

export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: Chat,
  },
  {
    name: routes.MESSAGES,
    component: Messages,
  },
];
