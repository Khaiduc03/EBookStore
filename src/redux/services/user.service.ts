import apiService from './api.service';

import {ENDPOINTS} from '../../environment';
import {Http} from '../../types';
import {UpdateProfileDto} from '../dto';
import {configFormData} from './config.service';

export class UserService {
  static async getUserById(action: string) {
    return await apiService.get(`${ENDPOINTS.GET_USER_BY_UUID}/${action}`);
  }
  static async getUserProfile() {
    return await apiService.get(`${ENDPOINTS.PROFILE}`);
  }

  static async updateUserAvatar(action: FormData) {
    console.log(action);
    return await apiService.put(
      `${ENDPOINTS.UPLOAD_AVATAR}`,
      action,
      configFormData,
    );
  }

  static async deleteUserAvatar(): Promise<Http> {
    return await apiService.delete(`${ENDPOINTS.DELETE_AVATAR}`);
  }

  static async updateUserProfile(payload: UpdateProfileDto) {
    console.log(payload);
    return await apiService.put(`${ENDPOINTS.PROFILE}`, {
      ...payload,
    });
  }
}
