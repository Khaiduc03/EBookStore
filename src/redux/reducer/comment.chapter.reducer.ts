import {PayloadAction, createSlice} from '@reduxjs/toolkit';
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

    getCommentChapter: (state: CommentChapterState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    setCommentChapter: (
      state: CommentChapterState,
      action: PayloadAction<PayloadHttpListCommentData<CommentChapterType>>,
    ) => {
      return {
        ...state,
        listComment: {
          data: action.payload.data,
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

export const CommentChapterReducer = reducer.reducer;
export const CommentChapterAction = reducer.actions;
