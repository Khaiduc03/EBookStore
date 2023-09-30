import Config from "react-native-config";

// //URL
// export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_URL = Config.BASE_URL;



export enum Endpoints {
  //AUTH
  LOGIN_ENDPOINT = '/auth/login',
  REGISTER_ADMIN_ENDPOINT = '/auth/admin',
  CREATE_ACCOUNT_ENDPOINT = '/auth/register',
  REFRESH_TOKEN_ENDPOINT = '/auth/refresh-token',
  SIGN_IN_GOOGLE = '/auth/google-login',
  UPDATE_PASSWORD_ENDPOINT = '/auth/update-password',

  //USER
  GET_ALL_USER_ENDPOINT = '/user',
  UPLOAD_USER_AVATAR_ENDPOINT = '/user/avatar', //PUT, DELETE
  GET_PROFILE_ENDPOINT = '/user/profile', //GET, PUT
  GET_USER_BY_UUID_ENDPOINT = '/user/uuid', //GET
  
  //TOPIC
  GET_ALL_TOPIC_ENDPOINT = '/topic', //GET, POST
  UPDATE_TOPIC_ENDPOINT = '/topic/update', //PUT
  DELETE_TOPIC_ENDPOINT = '/topic/delete', //DELETE
  GET_TOPIC_BY_UUID_ENDPOINT = '/topic/uuid', //GET

  //COMIC
  GET_ALL_COMIC_ENDPOINT = '/comic', //GET, POST
  GET_COMIC_BY_UUID_ENDPOINT = '/comic/uuid', //GET

}
