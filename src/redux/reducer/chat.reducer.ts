import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  Accesstoken,
  ConversationI,
  ListConversationStateI,
  MessageI,
  RequestAddMessageI,
  RequestJoinConversationI,
} from '../types';

const initialState: ListConversationStateI = {
  conversations: [],
  messages: [],
};

export const reducer = createSlice({
  initialState,
  name: 'chat',
  reducers: {
    //get list conversation
    handleGetListConversation: (
      state: ListConversationStateI,
      _: PayloadAction<String>,
    ) => {
      return state;
    },

    handleGetListConversationSuccess: (
      state: ListConversationStateI,
      action: PayloadAction<ConversationI[]>,
    ) => {
      return {
        ...state,
        conversations: action.payload,
      };
    },
    //handle Join Conversation
    handleJoinConversation: (
      state: ListConversationStateI,
      _: PayloadAction<RequestJoinConversationI>,
    ) => {
      console.log('hi');
      return state;
    },

    handleJoinConversationSuccess: (
      state: ListConversationStateI,
      action: PayloadAction<MessageI[]>,
    ) => {
      return {
        ...state,
        messages: action.payload,
      };
    },

    //handle add message
    handleAddMessage: (
      state: ListConversationStateI,
      _: PayloadAction<RequestAddMessageI>,
    ) => {
      return state;
    },

    handleAddMessageSuccess: (
      state: ListConversationStateI,
      action: PayloadAction<MessageI>,
    ) => {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    },

    //handle create conversation
    handleCreateConversation: (
      state: ListConversationStateI,
      _: PayloadAction<RequestJoinConversationI>,
    ) => {
      return state;
    },

    handleCreateConversationSuccess: (
      state: ListConversationStateI,
      action: PayloadAction<ConversationI[]>,
    ) => {
      return {
        ...state,
        conversations: action.payload,
      };
    },

    //handle leave conversation
    handleLeaveConversation: (
      state: ListConversationStateI,
      _: PayloadAction<string>,
    ) => {
      return {
        ...state,
        messages: [],
      };
    },
  },
});

export const ChatActions = reducer.actions;
export const ChatReducer = reducer.reducer;
