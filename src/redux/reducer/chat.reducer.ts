import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  Accesstoken,
  ConversationI,
  ListConversationStateI,
  MessageI,
  RequestAddMessageI,
  RequestCreateConversationI,
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
    handleGetStatus: (
      state: ListConversationStateI,
      _: PayloadAction<Boolean>,
    ) => {
      return state;
    },

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
        messages: [action.payload, ...state.messages],
      };
    },

    //handle create conversation
    handleCreateConversation: (
      state: ListConversationStateI,
      _: PayloadAction<RequestCreateConversationI>,
    ) => {
      console.log('handleCreateConversation');
      return state;
    },

    handleCreateConversationSuccess: (
      state: ListConversationStateI,
      action: PayloadAction<ConversationI>,
    ) => {
      const existingConversation = state.conversations.find(
        conversation => conversation.uuid === action.payload.uuid,
      );

      if (!existingConversation) {
        return {
          ...state,
          conversations: [action.payload, ...state.conversations],
        };
      }

      // Trả về state hiện tại nếu action.payload đã tồn tại trong mảng
      return state;
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
