// import * as dotenv from 'dotenv';

// // config use env
// dotenv.config();

// //URL
export const BASE_URL =
  'https://7bcb-2402-800-63a8-b4b3-8d6-cb43-1d4c-c9bb.ngrok-free.app';

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

  GET_PROFILE_ENDPOINT = '/user/profile', //update profile and get info user
  //TOPIC
  GET_ALL_TOPIC_ENDPOINT = '/topic', //get all topic and create topic
  UPDATE_TOPIC_ENDPOINT = '/topic/update', //update topic
  DELETE_TOPIC_ENDPOINT = '/topic/delete', //delete topic
}
