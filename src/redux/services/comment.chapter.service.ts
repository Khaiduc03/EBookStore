import apiService from './api.service';

import {ENDPOINTS} from '../../environment';

export class CommentChapterService {
  static async postCommentChapter(payload: any) {
    console.log(`${ENDPOINTS.POST_COMMENT_COMIC}`, payload);
    return await apiService.post(`${ENDPOINTS.POST_COMMENT_COMIC}`, {
      chapter_uuid: payload.chapter_uuid,
      comment: payload.comment,
    });
  }

  static async getCommentChapter(payload: any) {
    console.log(
      `${ENDPOINTS.GET_COMMENT_COMIC}?chapter_uuid=${payload.chapter_uuid}&page=${payload.page}`,
    );
    return await apiService.get(
      `${ENDPOINTS.GET_COMMENT_COMIC}?chapter_uuid=${payload.chapter_uuid}&page=${payload.page}`,
    );
  }
}
