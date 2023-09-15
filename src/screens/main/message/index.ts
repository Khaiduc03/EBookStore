import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Chat from './Message/components/Chat';
import Message from './Message/components/Chat';

export {default as Message} from './Message/components/Chat';
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
