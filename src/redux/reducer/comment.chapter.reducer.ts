import {PayloadAction, createSlice, current} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {UserState} from '../types/user.type';
import {
  CommentChapterState,
  CommentChapterType,
  LikeCommentType,
  PayloadHttpListCommentData,
} from '../types/comment.chapter.type';

const initialState: CommentChapterState = {};

const reducer = createSlice({
  name: Redux.commentChapter,
  initialState: initialState,
  reducers: {
    postCommentChapter: (state: CommentChapterState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    posCommentChapterSucces: (
      state: CommentChapterState,
      action: PayloadAction<CommentChapterType>,
    ) => {
      return {
        ...state,
        listComment: {
          canNext: state.listComment?.canNext,
          currentPage: state.listComment?.currentPage,
          totalData: (state.listComment?.totalData || 0) + 1,
          data: [action.payload, ...(state.listComment?.data || [])],
        },
      };
    },

    postRepCommentChapter: (
      state: CommentChapterState,
      _: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },

    postRepCommentChapterSucces: (
      state: CommentChapterState,
      action: PayloadAction<CommentChapterType>,
    ) => {
      const uuid = action.payload.parents_comment_uuid;
      if (state.listComment && state.listComment.data) {
        const updatedListComment = {
          ...state.listComment,
          data: state.listComment.data.map(comment => {
            if (comment.uuid === uuid) {
              // Tìm thấy comment cần cập nhật
              const updatedRepCount = comment.re_comment_count + 1;

              return {
                ...comment,
                re_comment_count: updatedRepCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listRepComment: {
            canNext: state.listRepComment?.canNext,
            currentPage: state.listRepComment?.currentPage,
            totalData: (state.listRepComment?.totalData || 0) + 1,
            data: [action.payload, ...(state.listRepComment?.data || [])],
          },
          listComment: updatedListComment,
        };
      }
    },

    postLikeCommentChapter: (
      state: CommentChapterState,
      _: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },

    postUnlikeCommentChapter: (
      state: CommentChapterState,
      _: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },

    getCommentChapter: (state: CommentChapterState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    setCommentChapter: (
      state: CommentChapterState,
      action: PayloadAction<PayloadHttpListCommentData<CommentChapterType>>,
    ) => {
      const currentData: CommentChapterType[] = state.listComment?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listComment: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },

    clearCommentChapter: (state: CommentChapterState) => {
      return {
        ...state,
        listComment: {
          data: [],
        },
      };
    },

    getRepCommentChapter: (
      state: CommentChapterState,
      _: PayloadAction<any>,
    ) => {
      return {
        ...state,
      };
    },

    setRepCommentChapter: (
      state: CommentChapterState,
      action: PayloadAction<PayloadHttpListCommentData<CommentChapterType>>,
    ) => {
      const currentData: CommentChapterType[] =
        state.listRepComment?.data || [];
      const newData = action.payload.data || [];
      const uniqueNewData = newData.filter(
        newItem => !currentData.some(oldItem => oldItem.uuid === newItem.uuid),
      );
      const updatedData = [...currentData, ...uniqueNewData];
      return {
        ...state,
        listRepComment: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
    clearRepCommentChapter: (state: CommentChapterState) => {
      return {
        ...state,
        listRepComment: {
          data: [],
        },
      };
    },

    handleLikeAndUnlikeSuccess: (
      state: CommentChapterState,
      action: PayloadAction<string>, // UUID của comment
    ) => {
      const commentUUID = action.payload;

      // Kiểm tra listComment có tồn tại và không rỗng
      if (state.listComment && state.listComment.data) {
        const updatedListComment = {
          ...state.listComment,
          data: state.listComment.data.map(comment => {
            if (comment.uuid === commentUUID) {
              // Tìm thấy comment cần cập nhật
              const updatedIsLike = !comment.is_like;
              const updatedLikeCount = updatedIsLike
                ? comment.like_count + 1
                : comment.like_count - 1;

              return {
                ...comment,
                is_like: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listComment: updatedListComment,
        };
      }

      return state; // Trả về state không thay đổi nếu không có listComment hoặc listComment.data
    },

    handleLikeAndUnlikeRepSuccess: (
      state: CommentChapterState,
      action: PayloadAction<string>, // UUID của comment
    ) => {
      const commentUUID = action.payload;

      // Kiểm tra listComment có tồn tại và không rỗng
      if (state.listRepComment && state.listRepComment.data) {
        const updatedlistRepComment = {
          ...state.listRepComment,
          data: state.listRepComment.data.map(comment => {
            if (comment.uuid === commentUUID) {
              // Tìm thấy comment cần cập nhật
              const updatedIsLike = !comment.is_like;
              const updatedLikeCount = updatedIsLike
                ? comment.like_count + 1
                : comment.like_count - 1;

              return {
                ...comment,
                is_like: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return comment;
          }),
        };

        return {
          ...state,
          listRepComment: updatedlistRepComment,
        };
      }

      return state; // Trả về state không thay đổi nếu không có listComment hoặc listComment.data
    },
  },
});

export const CommentChapterReducer = reducer.reducer;
export const CommentChapterAction = reducer.actions;
