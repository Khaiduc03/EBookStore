import {BASE_URL, ENDPOINTS} from '../../environment';
import apiService from './api.service';
import {configFormData, configNoCache} from './config.service';

export class ComicService {
  //get data
  static async getComic(action: any) {
    console.log(action);
    console.log(ENDPOINTS.COMIC);
    return await apiService.get(`${ENDPOINTS.COMIC}`, action);
  }
}
