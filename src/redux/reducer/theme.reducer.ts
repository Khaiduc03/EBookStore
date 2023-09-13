import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {ThemeMode, Redux} from '../types';

const initialState: ThemeMode = {
  mode: 'light',
};
const reducer = createSlice({
  name: Redux.theme,
  initialState: initialState,
  reducers: {
    setTheme: (state: ThemeMode, action: PayloadAction<'dark' | 'light'>) => {
      state.mode = action.payload;
    },
  },
});

export const ThemeReducer = reducer.reducer;
export const ThemeActions = reducer.actions;
