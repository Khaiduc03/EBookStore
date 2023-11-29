import {RootState} from '../store';
export const getAllUser = (state: RootState) => state.user.listUser?.data;
