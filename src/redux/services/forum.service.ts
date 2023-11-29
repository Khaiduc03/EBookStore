import apiService from './api.service';
import {ENDPOINTS} from '../../environment';
import {configFormData} from './config.service';

export class ForumService {
  static async getAllForum(action: number) {
    console.log(`${ENDPOINTS.FORUM}?page=${action} `);
    return await apiService.get(`${ENDPOINTS.FORUM}?page=${action}`);
  }

  static async postLikeForum(forum_uuid: string) {
    console.log(`${ENDPOINTS.LIKE}`, {forum_uuid: forum_uuid});
    return await apiService.post(`${ENDPOINTS.LIKE}`, {forum_uuid: forum_uuid});
  }

  static async deleteLikeForum(forum_uuid: string) {
    console.log(`${ENDPOINTS.UNLIKE}`, {
      data: {forum_uuid: forum_uuid},
    });
    return await apiService.delete(`${ENDPOINTS.UNLIKE}`, {
      data: {forum_uuid: forum_uuid},
    });
  }

  static async postCreatePostForum(payload: any) {
    console.log(`${ENDPOINTS.FORUM}`, {
      payload,
    });
    return await apiService.post(`${ENDPOINTS.FORUM}`, payload, configFormData);
  }

  static async deletePostForum(forum_uuid: string) {
    console.log(`${ENDPOINTS.FORUM_DELETE_POST}`, {
      data: forum_uuid,
    });
    return await apiService.delete(`${ENDPOINTS.FORUM_DELETE_POST}`, {
      data: forum_uuid,
    });
  }
}
