import {ENDPOINTS} from '../../environment';
import apiService from './api.service';
import {configFormData, configNoCache} from './config.service';

export class RatingService {
  static async getChartRating(paload: string) {
    console.log(`${ENDPOINTS.RATING_CHART}?comic_uuid=${paload}`);
    return await apiService.get(
      `${ENDPOINTS.RATING_CHART}?comic_uuid=${paload}`,
    );
  }

  static async getListRating(paload: string) {
    console.log(`${ENDPOINTS.ALL_RATING_COMIC}?comic_uuid=${paload}`);
    return await apiService.get(
      `${ENDPOINTS.ALL_RATING_COMIC}?comic_uuid=${paload}`,
    );
  }
}
