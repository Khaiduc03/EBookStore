import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {
  ListFollow,
  PayloadHttpListFollow,
  UserState,
  UserType,
} from '../types/user.type';
import {PayloadHttpList} from '../../types';
import {ForumType, PayloadHttpListForumData} from '../types/forum.type';

const initialState: UserState = {};

const reducer = createSlice({
  name: Redux.user,
  initialState: initialState,
  reducers: {
    postFollow: (state: UserState, _: PayloadAction<any>) => {
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

    getPostById: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setPostById: (state: UserState, action: PayloadAction<ForumType>) => {
      return {
        ...state,
        postById: {
          ...action.payload,
        },
      };
    },

    putSummary: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    getListFollow: (state: UserState) => {
      return {
        ...state,
      };
    },

    handleSuccerFollower: (state: UserState, action: PayloadAction<string>) => {
      const uuid = action.payload;

      if (state.listFollow && state.listFollow.data?.following) {
        state.listFollow.data.following.forEach(follow => {
          if (follow.user_follower_uuid === uuid) {
            // Tìm thấy follow cần cập nhật
            follow.is_follower = !follow.is_follower;
          }
        });

        // Không trả về giá trị mới, chỉ cập nhật draft
      }

      return state; // Trả về trạng thái mới sau khi đã cập nhật draft
    },

    setListFollow: (
      state: UserState,
      action: PayloadAction<PayloadHttpListFollow<ListFollow>>,
    ) => {
      const payloadData = action.payload.data;
      if (payloadData && payloadData.following) {
        payloadData.following.forEach(followingItem => {
          followingItem.is_follower = true;
        });
      }

      return {
        ...state,
        listFollow: {
          ...action.payload,
          data: payloadData,
        },
      };
    },
  },
});

export const UserReducer = reducer.reducer;
export const UserAction = reducer.actions;
