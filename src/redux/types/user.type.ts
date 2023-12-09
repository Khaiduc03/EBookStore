import {uuid, Timestamp, PayloadHttpList} from '../../types';
import {ForumType, PayloadHttpListForumData} from './forum.type';

export type UserState = Partial<{
  listUser: PayloadHttpList<UserType>;
  userById: PayloadHttpList<UserType>;
  listPostByUser: PayloadHttpListForumData<ForumType>;
  postById: ForumType;
  listFollow: PayloadHttpListFollow<ListFollow>;
  listUserRandom: PayloadHttpList<UserType>;
  listAllPostByIdUser: PayloadHttpListForumData<ForumType>;
}>;
export type UserType = uuid & {
  email: string;
  fullname: string;
  phone: string;
  summary: string;
  gender: string;
  status: boolean;
  dob: string;
  image_url: string;
  followercount: number;
  followingcount: number;
  is_follower: boolean;
  is_following: boolean;
};

export interface PayloadHttpListFollow<T> {
  code?: number;
  message?: string;
  data?: T;
}

export type ListFollow = {
  follower: ItemFollowType[];
  following: ItemFollowType[];
};

export type ItemFollowType = uuid & {
  user_following_uuid: string;
  user_follower_uuid: string;
  fullname: string;
  image_url: string;
  email: string;
  is_following: boolean;
  is_follower: boolean;
};
