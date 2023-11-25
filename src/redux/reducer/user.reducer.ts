import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {UserState} from '../types/user.type';

const initialState: UserState = {};

const reducer = createSlice({
  name: Redux.user,
  initialState: initialState,
  reducers: {
    postFollow: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
  },
});

export const UserReducer = reducer.reducer;
export const UserAction = reducer.actions;
