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
        ...state,
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
    deletePostById: (state: UserState) => {
      return {
        ...state,
        postById: undefined,
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
      }

      return state;
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
    getUserRandom: (state: UserState) => {
      return {
        ...state,
      };
    },

    setListUserRandom: (
      state: UserState,
      action: PayloadAction<PayloadHttpList<UserType>>,
    ) => {
      return {
        ...state,
        listUserRandom: {
          ...action.payload,
        },
      };
    },

    deleteFollwer: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    handleDeleteFollowerSuccess: (
      state: UserState,
      action: PayloadAction<string>,
    ) => {
      if (state.listFollow && state.listFollow.data) {
        const updatedFollower = state.listFollow.data.follower.filter(
          followerItem => followerItem.user_following_uuid !== action.payload,
        );

        return {
          ...state,
          listFollow: {
            ...state.listFollow,
            data: {
              ...state.listFollow.data,
              follower: updatedFollower,
            },
          },
        };
      }
      return state;
    },

    handleDeleteItemRandom: (
      state: UserState,
      action: PayloadAction<string>,
    ) => {
      if (state.listUserRandom && state.listUserRandom.data) {
        const updatedFollower = state.listUserRandom.data.filter(
          followerItem => followerItem.uuid !== action.payload,
        );

        return {
          ...state,
          listUserRandom: {
            ...state.listUserRandom,
            data: updatedFollower,
          },
        };
      }
      return state;
    },

    getListAllPostByIdUser: (state: UserState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListAllPostByIdUser: (
      state: UserState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      const currentData: ForumType[] = state.listAllPostByIdUser?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listAllPostByIdUser: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
    clearListAllPostByUser: (state: UserState) => {
      return {
        ...state,
        listAllPostByIdUser: {},
      };
    },

    handleSuccerFollowRandom: (
      state: UserState,
      action: PayloadAction<string>,
    ) => {
      const uuid = action.payload;

      if (state.listUserRandom && state.listUserRandom.data) {
        state.listUserRandom.data.forEach(follow => {
          if (follow.uuid === uuid) {
            // Tìm thấy follow cần cập nhật
            follow.is_following = !follow.is_following;
          }
        });
      }

      return state;
    },

    postFollowRandom: (state: UserState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    postFollowListFollower: (state: UserState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    handleSuccerPostFollowListFollower: (
      state: UserState,
      action: PayloadAction<string>,
    ) => {
      const uuid = action.payload;

      if (state.listFollow && state.listFollow.data?.follower) {
        state.listFollow.data.follower.forEach(follow => {
          if (follow.user_following_uuid === uuid) {
            // Tìm thấy follow cần cập nhật
            follow.is_following = !follow.is_following;
          }
        });
      }

      return state;
    },
  },
});

export const UserReducer = reducer.reducer;
export const UserAction = reducer.actions;
