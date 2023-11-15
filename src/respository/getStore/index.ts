import {store} from '../../redux';

const getAccessToken = async () => {
  return 
};

const getUser = async () => {
  return store.getState().auth.user;
};
const getRefreshToken = async () => {
  return store.getState().auth.refreshToken;
};

const getEnableSignIn = async () => {
  return store.getState().auth.enableSignIn;
};

export {getAccessToken, getUser, getRefreshToken, getEnableSignIn};
