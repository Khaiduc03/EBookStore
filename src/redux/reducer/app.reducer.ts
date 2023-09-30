import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppStatus} from '../types';
import {Redux} from '../types/redux.type';

const initialState: AppStatus = {
  isReady: false,
};

const reducer = createSlice({
  name: Redux.app,
  initialState,
  reducers: {
    handleReady: (state: AppStatus,_: PayloadAction) => {
      return state
    },
    setReady: (state: AppStatus) => {
      return {
        ...state,
        isReady: true,
      };
    },
  },
});


export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
