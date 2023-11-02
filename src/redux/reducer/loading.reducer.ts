import {createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {LoadingState} from '../types';

const initialState: LoadingState = {
  isLoading: false,
  isLoadingMain: false,
};

const reducer = createSlice({
  name: Redux.loading,
  initialState,
  reducers: {
    showLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    hideLoading: (state: LoadingState) => {
      state.isLoading = false;
    },

    showLoadingMain: (state: LoadingState) => {
      state.isLoading = true;
    },
    hideLoadingMain: (state: LoadingState) => {
      state.isLoading = false;
    },
  },
});

export const LoadingReducer = reducer.reducer;
export const LoadingActions = reducer.actions;
