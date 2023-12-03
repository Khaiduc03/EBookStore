import {uuid, Timestamp, PayloadHttpList} from '../../types';
import {ForumType, PayloadHttpListForumData} from './forum.type';

export type UserState = Partial<{
  listUser: PayloadHttpList<UserType>;
  userById: PayloadHttpList<UserType>;
  listPostByUser: PayloadHttpListForumData<ForumType>;
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
};
