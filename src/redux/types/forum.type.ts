import {Timestamp, uuid} from '../../types';

export type ForumAllType = {
  data: ForumType[];
  totalData: number;
  totalPage: number;
  currentPage: string;
  canNext: boolean;
  currentDataSize: number;
};

export interface PayloadHttpListForum {
  code?: number;
  message?: string;
  data?: ForumAllType[];
}

export interface PayloadHttpListForumData<T> {
  totalData?: number;
  totalPage?: number;
  currentPage?: number;
  canNext?: boolean;
  currentDataSize?: number;
  data?: T[];
}

export interface PayloadHttpListForumView<T> {
  data?: T[];
}

export type ForumState = Partial<{
  listDataForum: PayloadHttpListForumData<ForumType>;
}>;

export interface ForumType extends uuid, Timestamp {
  user_uuid: string;
  user_avatar: string | null;
  user_fullname: string | null;
  images: string[];
  like_uuid: string | null;
  is_liked: boolean;
  like_count: number;
  comment_count: number;
  content: string;
  status: boolean;
}
