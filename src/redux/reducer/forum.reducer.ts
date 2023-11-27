import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {
  ForumAllType,
  ForumState,
  ForumType,
  PayloadHttpListForum,
  PayloadHttpListForumData,
} from '../types/forum.type';
import {data} from '../../screens/main/home/Notifications/types';

const initialState: ForumState = {};

const reducer = createSlice({
  name: Redux.forum,
  initialState: {...initialState},
  reducers: {
    handleGetListData: (state: ForumState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      return {
        ...state,
        listDataForum: {
          data: action.payload.data,
        },
      };
    },
    postLikeForumPost: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    postUnlikeForumPost: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    handleLike_UnlikeSuccess: (
      state: ForumState,
      action: PayloadAction<string>,
    ) => {
      const uuid = action.payload;

      // Kiểm tra listForum có tồn tại và không rỗng
      if (state.listDataForum && state.listDataForum.data) {
        const updatedListForum = {
          ...state.listDataForum,
          data: state.listDataForum.data.map(item => {
            if (item.uuid === uuid) {
              // Tìm thấy item cần cập nhật
              const updatedIsLike = !item.is_liked;
              const updatedLikeCount = updatedIsLike
                ? item.like_count + 1
                : item.like_count - 1;

              return {
                ...item,
                is_liked: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return item;
          }),
        };

        return {
          ...state,
          listDataForum: updatedListForum,
        };
      }

      return state; // Trả về state không thay đổi nếu không có listForum hoặc listForum.data
    },

    handleCreatePost: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    handleCreatePostSuccess: (
      state: ForumState,
      action: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },
    handleCreatePostFailed: (
      state: ForumState,
      action: PayloadAction<Pick<ForumType, 'images' | 'status' | 'content'>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const ForumReducer = reducer.reducer;
export const ForumActions = reducer.actions;
