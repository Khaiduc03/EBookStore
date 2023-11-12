import {createSlice} from '@reduxjs/toolkit';
import {ListConversationStateI} from '../types';

const initialState: ListConversationStateI = {
  conversations: [],
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  initialState,
  name: 'chat',
  reducers: {
    //get list conversation
    getListConversation: (state: ListConversationStateI) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListConversationSuccess: (
      state: ListConversationStateI,
      action: any,
    ) => {
      return {
        ...state,
        conversations: action.payload,
        loading: false,
      };
    },
    getListConversationFailed: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    //create conversation
    createConversation: (state: ListConversationStateI) => {
      return {
        ...state,
        loading: true,
      };
    },
    createConversationSuccess: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
        loading: false,
      };
    },
    createConversationFailed: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    //join conversation
    joinConversation: (state: ListConversationStateI) => {
      return {
        ...state,
        loading: true,
      };
    },
    joinConversationSuccess: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
        loading: false,
      };
    },
    joinConversationFailed: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    //add message
    addMessage: (state: ListConversationStateI) => {
      return {
        ...state,
        loading: true,
      };
    },
    addMessageSuccess: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
        loading: false,
      };
    },
    addMessageFailed: (state: ListConversationStateI, action: any) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});
