import {RootState} from '../store';
export const getAllUser = (state: RootState) => state.user.listUser?.data;
export const getUserById = (state: RootState) => state.user.userById?.data;
