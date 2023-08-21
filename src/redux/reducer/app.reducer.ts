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
    handleReady: (state: AppStatus , action: PayloadAction<boolean>) => {
      return {
        ...state,
        isReady: action.payload,
      };
    },
  },
});

export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
