import {routes} from '../../../constants';
import {Screen} from '../../../types';
import MessageScreen from './Messages';
import SearchUserScreen from './SearchUser';

export {default as Conversation} from './Conversation';
export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: MessageScreen,
  },
  {
    name: routes.SEARCH_USER,
    component: SearchUserScreen,
  },
];
