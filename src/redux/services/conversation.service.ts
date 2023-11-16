import apiService from './api.service';

import { ENDPOINTS } from '../../environment';

export class ConversationService {
  static async getConversation() {
    return await apiService.get(`${ENDPOINTS.CONVERSATION}`);
  }

}
