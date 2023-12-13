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

  static async likeRating(paload: string) {
    console.log(`${ENDPOINTS.LIKE_RATING}${paload}`);
    return await apiService.post(`${ENDPOINTS.LIKE_RATING}`, {
      rating_uuid: paload,
    });
  }

  static async postRating(paload: any) {
    console.log(`${ENDPOINTS.ALL_RATING_COMIC}`, {
      rating: paload.rating,
      comment: paload.comment,
      comic_uuid: paload.comic_uuid,
    });
    return await apiService.post(`${ENDPOINTS.ALL_RATING_COMIC}`, {
      comic_uuid: paload.comic_uuid,
      rating: paload.rating,
      comment: paload.comment,
    });
  }

  static async unLikeRating(paload: string) {
    console.log(`${ENDPOINTS.UNLIKE_RATING}${paload}`);
    return await apiService.delete(`${ENDPOINTS.UNLIKE_RATING}`, {
      data: {rating_uuid: paload},
    });
  }

  static async deleteRating(paload: string) {
    console.log(`${ENDPOINTS.ALL_RATING_COMIC}${paload}`);
    return await apiService.delete(`${ENDPOINTS.ALL_RATING_COMIC}`, {
      data: {rating_uuid: paload},
    });
  }
}
