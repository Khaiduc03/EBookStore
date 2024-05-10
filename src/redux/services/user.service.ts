import apiService from './api.service';

import {ENDPOINTS} from '../../environment';
import {Http} from '../../types';
import {UpdateProfileDto} from '../dto';
import {configFormData} from './config.service';
import { ChangePasswordType } from '../types/user.type';

export class UserService {
  static async getUserById(action: string) {
    console.log(`${ENDPOINTS.GET_USER_BY_UUID}${action}`);
    return await apiService.get(`${ENDPOINTS.GET_USER_BY_UUID}${action}`);
  }

  static async putSummary(payload: string) {
    console.log(`${ENDPOINTS.PUT_SUMMARY}${payload}`);
    return await apiService.put(`${ENDPOINTS.PUT_SUMMARY}`, {summary: payload});
  }

  static async getPostById(payload: string) {
    console.log(`${ENDPOINTS.FORUM_BY_UUID}${payload}`);
    return await apiService.get(
      `${ENDPOINTS.FORUM_BY_UUID}?post_uuid=${payload}`,
    );
  }

  static async getListPostByUser(payload: any) {
    console.log(`${ENDPOINTS.ALL_POST_BY_USER}${payload}`);
    return await apiService.get(
      `${ENDPOINTS.ALL_POST_BY_USER}?page=${payload}`,
    );
  }
  static async getListAllPostByIdUser(payload: any) {
    console.log(
      `${ENDPOINTS.GET_ALLPOST_BY_ID}?page=${payload.page}&&user_uuid=${payload.user_uuid}`,
    );
    return await apiService.get(
      `${ENDPOINTS.GET_ALLPOST_BY_ID}?page=${payload.page}&&user_uuid=${payload.user_uuid}`,
    );
  }
  static async getUserProfile() {
    return await apiService.get(`${ENDPOINTS.PROFILE}`);
  }

  static async updateUserAvatar(action: FormData) {
    return await apiService.put(
      `${ENDPOINTS.UPLOAD_AVATAR}`,
      action,
      configFormData,
    );
  }

  static async getAllUser() {
    return await apiService.get(`${ENDPOINTS.GET_ALL_USER}`);
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

  static async postFollow(payload: any) {
    console.log(`${ENDPOINTS.FOLLOWER_USER}`, payload);
    return await apiService.post(`${ENDPOINTS.FOLLOWER_USER}`, {
      follower_uuid: payload,
    });
  }

  static async deleteFollow(payload: any) {
    console.log(`${ENDPOINTS.FOLLOWER_USER}`, payload);
    return await apiService.delete(`${ENDPOINTS.FOLLOWER_USER}`, {
      data: {following_uuid: payload},
    });
  }

  static async getFollow() {
    console.log(`${ENDPOINTS.FOLLOWER_USER}`);
    return await apiService.get(`${ENDPOINTS.FOLLOWER_USER}`);
  }

  static async getUserRandom() {
    console.log(`${ENDPOINTS.GET_USER_RANDOM}`);
    return await apiService.get(`${ENDPOINTS.GET_USER_RANDOM}`);
  }
  // Change password
  static async changePassword(payload: ChangePasswordType) {
    console.log(`${ENDPOINTS.UPLOAD_PASSWORD}`, payload);
    return await apiService.put(`${ENDPOINTS.UPLOAD_PASSWORD}`,   payload);
  }
}
