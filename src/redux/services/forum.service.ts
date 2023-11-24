import apiService from './api.service';
import {ENDPOINTS} from '../../environment';

export class ForumService {
  static async getAllForum(action: number) {
    console.log(`${ENDPOINTS.FORUM}?page=${action} `);
    return await apiService.get(`${ENDPOINTS.FORUM}?page=${action}`);
  }
}
