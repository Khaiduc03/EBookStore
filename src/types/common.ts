import {FunctionComponent} from 'react';
import {routes} from '../constants';
import * as ImagePicker from 'react-native-image-picker';

export interface PayloadHttpList<T> {
  code?: number;
  message?: string;
  data?: T[];
}

export type ToastType = {
  text2: string;
};

export type uuid = {
  uuid: string;
};

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
};

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};

export type Pagination = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
};

export type BaseResponse<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T;
};

export type BaseResponseList<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T[];
};
export type Avatar = uuid &
  Timestamp & {
    public_id: string;
    url: string;
    secure_url: string;
  };

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  VIP = 'VIP',
}

export enum Gender {
  FAMALE = 'FAMALE',
  MALE = 'MALE',
}

export type Onboard = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}
