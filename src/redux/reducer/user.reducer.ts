import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ComicState, Redux, TopicType} from '../types';
import {PayloadHttpList} from '../../types';

const initialState: ComicState = {};
const reducer = createSlice({
  name: Redux.auth,
  initialState: initialState,
  reducers: {
    
  },
});

export const TopicReducer = reducer.reducer;
export const TopicActions = reducer.actions;
