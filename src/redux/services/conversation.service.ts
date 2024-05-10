import apiService from './api.service';

import {ENDPOINTS} from '../../environment';
import {RequestAddMessageI, ShareLink2I, ShareLinkI} from '../types';

export class ConversationService {
  static async getConversation() {
    return await apiService.get(`${ENDPOINTS.CONVERSATION}`);
  }

  static async createConversation(payload: ShareLink2I) {
    return await apiService.post(ENDPOINTS.CONVERSATION, payload);
  }

  static async addMessage(payload: RequestAddMessageI) {
    return await apiService.post(ENDPOINTS.MESSAGES, payload);
  }

  static async getMessage(conversation_uuid: string) {
    return await apiService.get(
      `${ENDPOINTS.MESSAGES}?conversation_uuid=${conversation_uuid}`,
    );
  }
}
