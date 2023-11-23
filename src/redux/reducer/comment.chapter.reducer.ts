import {PayloadAction, createSlice, current} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {UserState} from '../types/user.type';
import {
  CommentChapterState,
  CommentChapterType,
  PayloadHttpListCommentData,
} from '../types/comment.chapter.type';

const initialState: CommentChapterState = {};

const reducer = createSlice({
  name: Redux.commentChapter,
  initialState: initialState,
  reducers: {
    postCommentChapter: (state: CommentChapterState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    posCommentChapterSucces: (
      state: CommentChapterState,
      action: PayloadAction<CommentChapterType>,
    ) => {
      return {
        ...state,
        listComment: {
          canNext: state.listComment?.canNext,
          currentPage: state.listComment?.currentPage,
          totalData: state.listComment?.totalData,
          data: [action.payload, ...(state.listComment?.data || [])],
        },
      };
    },

    getCommentChapter: (state: CommentChapterState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    setCommentChapter: (
      state: CommentChapterState,
      action: PayloadAction<PayloadHttpListCommentData<CommentChapterType>>,
    ) => {
      const currentData: CommentChapterType[] = state.listComment?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listComment: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    clearCommentChapter: (state: CommentChapterState) => {
      return {
        ...state,
        listComment: {
          data: [],
        },
      };
    },
  },
});

export const CommentChapterReducer = reducer.reducer;
export const CommentChapterAction = reducer.actions;
