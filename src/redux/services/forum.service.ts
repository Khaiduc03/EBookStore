import apiService from './api.service';
import {ENDPOINTS} from '../../environment';

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
    console.log(`${ENDPOINTS.UNLIKE}`, {forum_uuid: forum_uuid});
    return await apiService.delete(`${ENDPOINTS.UNLIKE}`, {
      data: {forum_uuid: forum_uuid},
    });
  }
}
