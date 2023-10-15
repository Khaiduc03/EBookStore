import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Chat from '../message/Chat';
import Message from '../message/Messages';

export {default as Bookmark} from './Bookmark';

export const bookmarkScreens: Screen[] = [
  {
    name: routes.MESSAGES,
    component: Message,
  },
  {
    name: routes.CHAT,
    component: Chat,
  },
];
