import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ComicState, Redux, TopicType} from '../types';
import {PayloadHttpList} from '../../types';

const initialState: ComicState = {};
const reducer = createSlice({
  name: Redux.topic,
  initialState: initialState,
  reducers: {
    //topic
    getListTopic: (state: ComicState) => {
      return {
        ...state,
      };
    },
    setListTopic: (
      state: ComicState,
      action: PayloadAction<PayloadHttpList<TopicType>>,
    ) => {
      return {
        ...state,
        topic: {
          data: action.payload.data,
        },
      };
    },
  },
});

export const TopicReducer = reducer.reducer;
export const TopicActions = reducer.actions;
