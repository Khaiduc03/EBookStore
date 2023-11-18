import apiService from './api.service';

import {ENDPOINTS} from '../../environment';

export class ConversationService {
  static async getConversation() {
    return await apiService.get(`${ENDPOINTS.CONVERSATION}`);
  }

  static async getMessage(conversation_uuid: string) {

    return await apiService.get(
      `${ENDPOINTS.MESSAGES}?conversation_uuid=${conversation_uuid}`,
    );
  }
}
