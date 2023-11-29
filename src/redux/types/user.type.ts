import {uuid, Timestamp, PayloadHttpList} from '../../types';

export type UserState = Partial<{
  listUser: PayloadHttpList<UserType>;
  userById: PayloadHttpList<UserType>;
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
