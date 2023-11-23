import {uuid, Timestamp} from '../../types';

export type CommentChapterState = Partial<{
  listComment: PayloadHttpListCommentData<CommentChapterType>;
}>;

export type CommentChapterType = uuid &
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

export interface PayloadHttpListCommentData<T> {
  totalData?: number;
  totalPage?: number;
  currentPage?: number;
  canNext?: boolean;
  currentDataSize?: number;
  data?: T[];
}
