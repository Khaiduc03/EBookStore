import {routes} from '../../../constants';
import AppNavigator from '../../../navigation/navigators/AppNavigator';
import {Screen} from '../../../types';
import Chat from '../message/Chat';
import Message from '../message/Messages';
import Bookmark from './Bookmark';

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
