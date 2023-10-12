import {ENDPOINTS} from '../../environment';
import apiService from './api.service';
import {configFormData, configNoCache} from './config.service';

export class TopicService {
  static async getTopic() {
    console.log('run axios');
    console.log(`${ENDPOINTS.TOPIC}`);
    return await apiService.get(`${ENDPOINTS.TOPIC}`);
  }
}
