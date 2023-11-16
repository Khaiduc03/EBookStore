import {routes} from '../../../constants';
import {Screen} from '../../../types';
import ConversationScreen from './Conversation';
import MessageScreen from './Message';

export {default as MessageScreen} from './Conversation';

export const messageScreens: Screen[] = [
  {
    name: routes.CHAT,
    component: MessageScreen,
  },
];
