import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  Redux,
  ComicState,
  ComicType,
  PayloadHttpListComics,
  ComicDetailType,
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
          comics: [],
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
      action: PayloadAction<PayloadHttpListComics<ComicType>>,
    ) => {
      return {
        ...state,
        listData: {
          comics: action.payload.comics,
        },
      };
    },

    //get comic detail
    getDetailComic: (state: ComicState, _: PayloadAction<string>) => {
      return {
        ...state,
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
  },
});

export const ComicReducer = reducer.reducer;
export const ComicActions = reducer.actions;
