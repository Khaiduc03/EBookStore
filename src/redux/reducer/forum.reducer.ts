import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  ForumState,
  ForumType,
  PayloadHttpListForumData,
} from '../types/forum.type';
import {Redux} from '../types';

const initialState: ForumState = {};

const reducer = createSlice({
  name: Redux.forum,
  initialState,
  reducers: {
    getListData: (state: ForumState, action: PayloadAction<ForumType>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      const currentData: ForumType[] = state.listData?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listData: {
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
