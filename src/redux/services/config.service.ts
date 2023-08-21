import { AxiosRequestConfig } from 'axios';

export const configFormData: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export const configNoCache: AxiosRequestConfig = {
  headers: {
    'Cache-Control': 'no-cache',
  },
};
