import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ComicState, Redux, TopicType} from '../types';
import {PayloadHttpList} from '../../types';
import {
  PayloadHttpListChart,
  RatingChart,
  RatingState,
  RatingType,
} from '../types/rating.type';

const initialState: RatingState = {};
const reducer = createSlice({
  name: Redux.rating,
  initialState: initialState,
  reducers: {
    getRatingChart: (state: RatingState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setRatingChart: (
      state: RatingState,
      action: PayloadAction<PayloadHttpListChart<RatingChart>>,
    ) => {
      return {
        ...state,
        ratingChart: {
          ...action.payload,
        },
      };
    },

    getListRating: (state: RatingState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setListRating: (
      state: RatingState,
      action: PayloadAction<PayloadHttpList<RatingType>>,
    ) => {
      return {
        ...state,

        listAllRating: {
          ...action.payload,
        },
      };
    },
  },
});

export const RatingReducer = reducer.reducer;
export const RatingActions = reducer.actions;
