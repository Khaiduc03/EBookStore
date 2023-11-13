import {RootState} from '../store';

export const getListConversation = (state: RootState) =>
  state.chat.conversations;
export const getListMessage = (state: RootState) => state.chat.messages;
