import { createSlice } from '@reduxjs/toolkit';
import { Redux } from '../types/redux.type';
import { LoadingState } from '../types';



const initialState: LoadingState = {
  isLoading: false,
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
  },
});

export const LoadingReducer = reducer.reducer;
export const LoadingActions = reducer.actions;
