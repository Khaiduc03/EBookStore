import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  Redux,
  ComicState,
  ComicType,
  ComicDetailType,
  PayloadHttpListChapter,
  ChapterType,
  DetailChapterType,
  PayloadHttpDetailChapter,
  PayloadHttpListComicData,
} from '../types';
import {PayloadHttpList} from '../../types';

const initialState: ComicState = {};
const reducer = createSlice({
  name: Redux.comic,
  initialState: initialState,
  reducers: {
    //comic
    clearListData: (state: ComicState) => {
      return {
        ...state,
        listData: {
          data: [],
        },
      };
    },

    getListData: (state: ComicState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      return {
        ...state,
        listData: {
          data: action.payload.data,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    //get comic detail
    getDetailComic: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    clearListDataDetail: (state: ComicState) => {
      return {
        ...state,
        detailData: {
          data: [],
        },
      };
    },
    setDetailComic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<ComicDetailType>>,
    ) => {
      return {
        ...state,
        detailData: {
          data: action.payload.data,
        },
      };
    },

    getListByTopic: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListByTopic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<ComicType>>,
    ) => {
      return {
        ...state,
        listDataByTopic: {
          data: action.payload.data,
        },
      };
    },
    clearListDataByComic: (state: ComicState) => {
      return {
        ...state,
        listDataByTopic: {
          data: [],
        },
      };
    },

    getListChapter: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    clearListDataChpater: (state: ComicState) => {
      return {
        ...state,
        listChapter: {
          data: [],
        },
      };
    },
    setListChapter: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListChapter<ChapterType>>,
    ) => {
      return {
        ...state,
        listChapter: {
          data: action.payload.data,
        },
      };
    },

    getListChapterDetail: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListChapterDetail: (
      state: ComicState,
      action: PayloadAction<PayloadHttpDetailChapter<DetailChapterType>>,
    ) => {
      return {
        ...state,
        listDetailChapter: {
          data_chapter: action.payload.data_chapter,
          next_chapter: action.payload.next_chapter,
          previous_chapter: action.payload.previous_chapter,
        },
      };
    },
    getListDetailChapterNav: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    getListBySearch: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListBySeacrch: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<ComicType>>,
    ) => {
      return {
        ...state,
        listDataBySearch: {
          data: action.payload.data,
        },
      };
    },
    ClearListBySearch: (state: ComicState) => {
      return {
        ...state,
        listDataBySearch: {
          data: [],
        },
      };
    },
  },
});

export const ComicReducer = reducer.reducer;
export const ComicActions = reducer.actions;
