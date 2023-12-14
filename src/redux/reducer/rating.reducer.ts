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

    postRating: (state: RatingState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    likeRating: (state: RatingState, _: PayloadAction<String>) => {
      return {
        ...state,
      };
    },

    unLikeRating: (state: RatingState, _: PayloadAction<String>) => {
      return {
        ...state,
      };
    },

    deleteRating: (state: RatingState, _: PayloadAction<String>) => {
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

    deleListRating: (state: RatingState) => {
      return {
        ...state,
        listAllRating: {},
      };
    },

    handleSuccerLikeRating: (
      state: RatingState,
      action: PayloadAction<string>,
    ) => {
      const uuid = action.payload;

      if (state.listAllRating && state.listAllRating.data) {
        state.listAllRating.data.forEach(rating => {
          if (rating.uuid === uuid) {
            // Tìm thấy follow cần cập nhật
            rating.is_like = !rating.is_like;
            if (rating.is_like) {
              rating.like_count = rating.like_count + 1;
            } else {
              rating.like_count = rating.like_count - 1;
            }
          }
        });
      }

      return state;
    },

    deleteRatingSucces: (state: RatingState, action: PayloadAction<string>) => {
      if (state.listAllRating && state.listAllRating.data) {
        const updateRating = state.listAllRating.data.filter(
          ratingItem => ratingItem.uuid !== action.payload,
        );

        return {
          ...state,
          listAllRating: {
            ...state,
            data: updateRating,
          },
        };
      }
      return state;
    },

    postRatingSuccess: (
      state: RatingState,
      action: PayloadAction<RatingType>,
    ) => {
      return {
        ...state,
        listAllRating: {
          ...state.listAllRating,
          data: [action.payload, ...(state.listAllRating?.data || [])],
        },
      };
    },
  },
});

export const RatingReducer = reducer.reducer;
export const RatingActions = reducer.actions;
