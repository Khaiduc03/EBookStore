// import * as dotenv from 'dotenv';

// // config use env
// dotenv.config();

// //URL
export const BASE_URL =
  'https://e69c-2402-800-63a8-b4b3-dd6-2d00-27a2-1424.ngrok-free.app';

export enum Endpoints {
  //AUTH
  LOGIN_ENDPOINT = '/auth/login',
  REGISTER_ADMIN_ENDPOINT = '/auth/admin',
  CREATE_ACCOUNT_ENDPOINT = '/auth/register',
  REFRESH_TOKEN_ENDPOINT = '/auth/refresh-token',
  SIGN_IN_GOOGLE = '/auth/google-login',
  //USER
  GET_ALL_USER_ENDPOINT = '/user',
  UPLOAD_USER_AVATAR_ENDPOINT = '/user/avatar', //put,remove: avatar
  UPDATE_USER_PROFILE_ENDPOINT = '/user/update-user',
  GET_PROFILE_ENDPOINT = '/user/profile', //update profile and get info user
  //TOPIC
  GET_ALL_TOPIC_ENDPOINT = '/topic', //get all topic and create topic
  UPDATE_TOPIC_ENDPOINT = '/topic/update', //update topic
  DELETE_TOPIC_ENDPOINT = '/topic/delete', //delete topic

}
