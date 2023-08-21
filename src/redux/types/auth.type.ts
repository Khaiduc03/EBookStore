import {Avatar, Timestamp, uuid} from '../../types';

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

export type RefreshToken = {
  refreshToken: string;
  accessToken: string;
};

export type User = uuid &
  Timestamp & {
    full_name: string;
    phone_number: string;
    dob: string;
    email: string;
    password: string;
    gender: number;
    address: string;
    role:USER_ROLE;
    summary: string;
    status: boolean;
    device_token: string;
    avatar: Avatar;
  };

  enum USER_ROLE {
    ADMIN = 'ADMIN',
    USER = 'USER',
  }

export type CVType = Avatar & {};
