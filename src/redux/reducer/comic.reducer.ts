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
  PayloadHttpListTopView,
  AddFavoriteType,
  PayloadHttp,
  PayloadHttpFavotite,
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
      const currentData: ComicType[] = state.listData?.data || [];
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
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      const currentData: ComicType[] = state.listDataByTopic?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listDataByTopic: {
          ...state.listDataByTopic,
          data: updatedData,
        },
      };
    },

    getListByTopicMore: (state: ComicState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListByTopicMore: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      return {
        ...state,
        listDataByTopicMore: {
          data: action.payload.data,
        },
      };
    },

    clearListDataByTopicMore: (state: ComicState) => {
      return {
        ...state,
        listDataByTopicMore: {},
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
    clearListDataChapter: (state: ComicState) => {
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
          totalComment: action.payload.totalComment,
        },
      };
    },
    clearListChapterDetail: (state: ComicState) => {
      return {
        ...state,
        listDetailChapter: {},
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
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      const currentData: ComicType[] = state.listDataBySearch?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listDataBySearch: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
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

    getListTopView: (state: ComicState) => {
      return {
        ...state,
      };
    },
    setListTopView: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListTopView<ComicType>>,
    ) => {
      return {
        ...state,
        listTopView: {
          data: action.payload.data,
        },
      };
    },

    postFavorite: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setPostFavorite: (
      state: ComicState,
      action: PayloadAction<PayloadHttpFavotite>,
    ) => {
      return {
        ...state,
        dataPostFavorite: {
          ...action.payload,
        },
      };
    },
    clearPostFavorite: (state: ComicState) => {
      return {
        ...state,
        dataPostFavorite: {},
      };
    },

    deleteFavorite: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    checkFavorite: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    getListFavorite: (state: ComicState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListFavorite: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      const currentData: ComicType[] = state.listFavorite?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem =>
          !currentData.some(
            oldItem => oldItem.favorite_uuid === newItem.favorite_uuid,
          ),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listFavorite: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    clearListFavorite: (state: ComicState) => {
      return {
        ...state,
        listFavorite: {},
      };
    },
    getListHistotyComic: (state: ComicState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListHistotyComic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListComicData<ComicType>>,
    ) => {
      const currentData: ComicType[] = state.listHistoryComic?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listHistoryComic: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
    clearListHistory: (state: ComicState) => {
      return {
        ...state,
        listHistoryComic: {},
      };
    },

    setCountComment: (state: ComicState) => {
      return {
        ...state,
        listDetailChapter: {
          ...state.listDetailChapter,
          totalComment: (state.listDetailChapter?.totalComment || 0) + 1,
        },
      };
    },

    reduceCountComment: (state: ComicState) => {
      return {
        ...state,
        listDetailChapter: {
          ...state.listDetailChapter,
          totalComment: (state.listDetailChapter?.totalComment || 0) - 1,
        },
      };
    },

    getListTopRating: (state: ComicState) => {
      return {
        ...state,
      };
    },
    setListTopRating: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListTopView<ComicType>>,
    ) => {
      return {
        ...state,
        listTopRating: {
          data: action.payload.data,
        },
      };
    },

    getListTopFavorite: (state: ComicState) => {
      return {
        ...state,
      };
    },
    setListTopFavorite: (
      state: ComicState,
      action: PayloadAction<PayloadHttpListTopView<ComicType>>,
    ) => {
      return {
        ...state,
        listTopFavorite: {
          data: action.payload.data,
        },
      };
    },
  },
});

export const ComicReducer = reducer.reducer;
export const ComicActions = reducer.actions;
