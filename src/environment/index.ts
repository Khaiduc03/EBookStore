import Config from 'react-native-config';

// //URL
// export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_URL = Config.BASE_URL;

console.log(BASE_URL);

export const ENDPOINTS = {
  LOGIN: Config.LOGIN,
  REGISTER: Config.REGISTER,
  LOGIN_GOOGLE: Config.LOGIN_GOOGLE,
  UPDATE_PASSWORD: Config.UPDATE_PASSWORD,
  REFRESH_TOKEN: Config.REFRESH_TOKEN,
  SEND_OTP: Config.SEND_OTP,
  VERIFY_OTP: Config.VERIFY_OTP,

  PROFILE: Config.PROFILE,
  GET_ALL_USER: Config.GET_ALL_USER,
  GET_USER_BY_UUID: Config.GET_USER_BY_UUID,
  UPLOAD_AVATAR: Config.UPLOAD_AVATAR,
  DELETE_AVATAR: Config.DELETE_AVATAR,

  IMAGE: Config.IMAGE,
  UPLOAD_IMAGES: Config.UPLOAD_IMAGES,

  TOPIC: Config.TOPIC,
  GET_TOPIC_BY_UUID: Config.GET_TOPIC_BY_UUID,
  UPDATE_TOPIC: Config.UPDATE_TOPIC,
  DELETE_TOPIC: Config.DELETE_TOPIC,

  COMIC: Config.COMIC,

  COMIC_BY_TOPIC: Config.COMIC_BY_TOPIC,
  COMIC_BY_NAME: Config.COMIC_BY_NAME,
  COMIC_UUID: Config.COMIC_UUID,
  COMIC_UPDATE: Config.COMIC_UPDATE,
  COMICS_DELETE: Config.COMICS_DELETE,
  COMIC_UPDATE_IMAGE: Config.COMIC_UPDATE_IMAGE,

  CHAPTER: Config.CHAPTER,
  CHAPTER_UUID: Config.CHAPTER_UUID,
};
console.log(Config.COMIC);

// export enum Endpoints {
//   //AUTH
//   LOGIN_ENDPOINT = '/auth/login',
//   REGISTER_ADMIN_ENDPOINT = '/auth/admin',
//   CREATE_ACCOUNT_ENDPOINT = '/auth/register',
//   REFRESH_TOKEN_ENDPOINT = '/auth/refresh-token',
//   SIGN_IN_GOOGLE = '/auth/google-login',
//   UPDATE_PASSWORD_ENDPOINT = '/auth/update-password',

//   //USER
//   GET_ALL_USER_ENDPOINT = '/user',
//   UPLOAD_USER_AVATAR_ENDPOINT = '/user/avatar', //PUT, DELETE
//   GET_PROFILE_ENDPOINT = '/user/profile', //GET, PUT
//   GET_USER_BY_UUID_ENDPOINT = '/user/uuid', //GET

//   //TOPIC
//   GET_ALL_TOPIC_ENDPOINT = '/topic', //GET, POST
//   UPDATE_TOPIC_ENDPOINT = '/topic/update', //PUT
//   DELETE_TOPIC_ENDPOINT = '/topic/delete', //DELETE
//   GET_TOPIC_BY_UUID_ENDPOINT = '/topic/uuid', //GET

//   //COMIC
//   GET_ALL_COMIC_ENDPOINT = '/comic', //GET, POST
//   GET_COMIC_BY_UUID_ENDPOINT = '/comic/uuid', //GET
// }
