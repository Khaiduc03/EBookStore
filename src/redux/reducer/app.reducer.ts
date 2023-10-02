import {createSlice} from '@reduxjs/toolkit';
import {AppStatus} from '../types';
import {Redux} from '../types/redux.type';

const initialState: AppStatus = {
  isReady: false,
};

const reducer = createSlice({
  name: Redux.app,
  initialState,
  reducers: {
    setReady: (state: AppStatus) => {
      state.isReady = true;
    },
  },
});

export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
