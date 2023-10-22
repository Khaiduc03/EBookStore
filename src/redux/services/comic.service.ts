import {BASE_URL, ENDPOINTS} from '../../environment';
import apiService from './api.service';
import {configFormData, configNoCache} from './config.service';

export class ComicService {
  //get data
  static async getComic(action: number) {
    console.log(`${ENDPOINTS.COMIC}?page=${action}`);
    return await apiService.get(`${ENDPOINTS.COMIC}?page=${action}`);
  }
  //get comic by id
  static async getComicById(action: string) {
    return await apiService.get(`${ENDPOINTS.COMIC_UUID}${action}`);
  }

  static async getComicByTopic(action: any) {
    console.log(`${ENDPOINTS.COMIC_BY_TOPIC}?page=${action}`);
    return await apiService.get(
      `${ENDPOINTS.COMIC_BY_TOPIC}?page=${action.page}&topic_uuid=${action.uuid}`,
    );
  }

  static async getAllChapterByComic(action: any) {
    console.log(`${ENDPOINTS.CHAPTER}?comic_uuid=${action}`);
    return await apiService.get(`${ENDPOINTS.CHAPTER}?comic_uuid=${action}`);
  }

  static async getChapterById(action: string) {
    return await apiService.get(`${ENDPOINTS.CHAPTER_UUID}${action}`);
  }

  static async getComicBySearch(action: any) {
    return await apiService.get(
      `${ENDPOINTS.COMIC_BY_NAME}?comic_name=${action.key}&page=${action.page}`,
    );
  }
}
