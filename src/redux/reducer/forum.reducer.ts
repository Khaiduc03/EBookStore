import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {
  ForumState,
  ForumType,
  PayloadHttpListForumData,
} from '../types/forum.type';

const initialState: ForumState = {};

const reducer = createSlice({
  name: Redux.forum,
  initialState: {...initialState},
  reducers: {
    handleGetListData: (state: ForumState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      return {
        ...state,
        listDataForum: {
          data: action.payload.data,
        },
      };
    },
    handleLikePost: (state: ForumState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setLikePost: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      return {
        ...state,
        listDataForum: {
          data: action.payload.data,
        },
      };
    },
    handleUnLikePost: (state: ForumState, _: PayloadAction<ForumType>) => {
      return {
        ...state,
      };
    },
    setUnLikePost: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      return {
        ...state,
        listDataForum: {
          data: action.payload.data,
        },
      };
    },
  },
});

export const ForumReducer = reducer.reducer;
export const ForumActions = reducer.actions;
