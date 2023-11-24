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
  initialState,
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
      const currentData: ForumType[] = state.listDataForum?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listDataForum: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
  },
});

export const ForumReducer = reducer.reducer;
export const ForumActions = reducer.actions;
