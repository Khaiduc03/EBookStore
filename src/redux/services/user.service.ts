import apiService from './api.service';

import { User } from '../types';
import { Endpoints } from '../../environment';
import { configFormData } from './config.service';

export class UserService {
  static async getUserById(action: string) {
    return await apiService.get(`${Endpoints.GET_ALL_USER_ENDPOINT}/${action}`);
  }
  static async getUserProfile() {
    return await apiService.get(`${Endpoints.GET_PROFILE_ENDPOINT}`);
  }


  static async updateUserAvatar(action: FormData) {
    console.log(action)
    return await apiService.put(
      `${Endpoints.UPLOAD_USER_AVATAR_ENDPOINT}`,
      action,
      configFormData
    );
  }
  static async updateUserProfile(action: User) {
    return await apiService.put(`${Endpoints.UPDATE_USER_PROFILE_ENDPOINT}`, {
      ...action,
    });
  }
}
