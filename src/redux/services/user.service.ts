import apiService from './api.service';

import {Endpoints} from '../../environment';
import {Http} from '../../types';
import {UpdateProfileDto} from '../dto';
import {configFormData} from './config.service';

export class UserService {
  static async getUserById(action: string) {
    return await apiService.get(`${Endpoints.GET_ALL_USER_ENDPOINT}/${action}`);
  }
  static async getUserProfile() {
    return await apiService.get(`${Endpoints.GET_PROFILE_ENDPOINT}`);
  }

  static async updateUserAvatar(action: FormData) {
    console.log(action);
    return await apiService.put(
      `${Endpoints.UPLOAD_USER_AVATAR_ENDPOINT}`,
      action,
      configFormData,
    );
  }

  static async deleteUserAvatar(): Promise<Http> {
    return await apiService.delete(`${Endpoints.UPLOAD_USER_AVATAR_ENDPOINT}`);
  }

  static async updateUserProfile(payload: UpdateProfileDto) {
    console.log(payload)
    return await apiService.put(`${Endpoints.GET_PROFILE_ENDPOINT}`, {
      ...payload,
    });
  }
}
