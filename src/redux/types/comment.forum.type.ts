import {uuid, Timestamp} from '../../types';

export type CommentForumState = Partial<{
  listComment: PayloadHttpListCommentData<CommentForumType>;
  listRepComment: PayloadHttpListCommentData<CommentForumType>;
}>;

export type CommentForumType = uuid &
  Timestamp & {
    comment: string;
    parents_comment_uuid: string;
    chapter_uuid: string;
    user_uuid: string;
    type: string;
    forum_uuid: string;
    fullname: string;
    user_avatar: string;
    re_comment_count: number;
    like_count: number;
    is_like: boolean;
  };

export type LikeCommentType = {
  code?: string;
  message?: string;
  data?: boolean;
};

export interface PayloadHttpListCommentData<T> {
  totalData?: number;
  totalPage?: number;
  currentPage?: number;
  canNext?: boolean;
  currentDataSize?: number;
  data?: T[];
}
