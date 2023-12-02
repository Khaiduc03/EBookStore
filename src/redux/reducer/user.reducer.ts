import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {UserState, UserType} from '../types/user.type';
import {PayloadHttpList} from '../../types';
import {ForumType, PayloadHttpListForumData} from '../types/forum.type';

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

    getListPostByUser: (state: UserState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListPostByUser: (
      state: UserState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      const currentData: ForumType[] = state.listPostByUser?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listPostByUser: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    clearListPostByUser: (state: UserState) => {
      return {
        listPostByUser: {},
      };
    },
  },
});

export const UserReducer = reducer.reducer;
export const UserAction = reducer.actions;
