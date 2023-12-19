import {Avatar, Gender, Timestamp, uuid} from '../../types';

export type AppStatus = {
  isReady: boolean;
};

export type AuthState = {
  enableSignIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: Partial<User>;
};

export type LoginPayload = {
  email: string;
  password: string;
  device_token: string;
  idToken: string;
};

export type NewPasswordPayload = {
  email: string;
  password: string;
  isOTP?: boolean;
};

export type SendOTPPayload = {
  email: string;
  otp: string;
};

export type RefreshToken = {
  refreshToken: string;
  accessToken: string;
};

export type User = uuid &
  Timestamp & {
    fullname: string;
    phone: string;
    dob: string;
    email: string;
    password: string;
    gender: Gender;
    address: string;
    roles: USER_ROLE;
    summary: string;
    status: boolean;
    device_token: string;
    image_url: string;
    public_id: string;
    isUpdate: boolean;
    isPassword: boolean;
    wallet: string;
    followercount: number;
    followingcount: number;
    post_count: string;
  };

export enum USER_ROLE {
  USER = 'user',
  ADMIN = 'admin',
  VIP = 'vip',
}

export type CVType = Avatar & {};
