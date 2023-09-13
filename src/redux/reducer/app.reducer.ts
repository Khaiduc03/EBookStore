import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AppStatus} from '../types';
import {Redux} from '../types/redux.type';
import {useAppDispatch} from '../../hooks';

const initialState: AppStatus = {
  isReady: false,
  isLoading: false,
};

const reducer = createSlice({
  name: Redux.app,
  initialState,
  reducers: {
    handleReady: (state: AppStatus) => {
      return {
        ...state,
        isReady: true,
      };
    },
    handleNotReady: (state: AppStatus) => {
      return {
        ...state,
        isReady: false,
      };
    },
    handleLoading: (state: AppStatus) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    handleHideLoading: (state: AppStatus) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});



export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
