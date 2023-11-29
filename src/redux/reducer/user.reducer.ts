import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {UserState, UserType} from '../types/user.type';
import {PayloadHttpList} from '../../types';

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

    getListUser: (state: UserState) => {
      return {
        ...state,
      };
    },
    setListUser: (
      state: UserState,
      action: PayloadAction<PayloadHttpList<UserType>>,
    ) => {
      return {
        ...state,
        listUser: {
          ...action.payload,
        },
      };
    },
    getUserById: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setUserById: (
      state: UserState,
      action: PayloadAction<PayloadHttpList<UserType>>,
    ) => {
      return {
        ...state,
        userById: {
          ...action.payload,
        },
      };
    },
    clearUserById: (state: UserState) => {
      return {
        ...state,
        userById: {},
      };
    },
  },
});

export const UserReducer = reducer.reducer;
export const UserAction = reducer.actions;
