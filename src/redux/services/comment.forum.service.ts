import apiService from './api.service';

import {ENDPOINTS} from '../../environment';

export class CommentForumService {
  static async postCommentForum(payload: any) {
    console.log(`${ENDPOINTS.COMMENT_FORUM}`, payload);
    return await apiService.post(`${ENDPOINTS.COMMENT_FORUM}`, {
      forum_uuid: payload.forum_uuid,
      comment: payload.comment,
    });
  }
  static async getCommentForum(payload: any) {
    console.log(
      `${ENDPOINTS.COMMENT_FORUM}?forum_uuid=${payload.forum_uuid}&page=${payload.page}`,
    );
    return await apiService.get(
      `${ENDPOINTS.COMMENT_FORUM}?forum_uuid=${payload.forum_uuid}&page=${payload.page}`,
    );
  }
  static async postLikeCommentForum(payload: any) {
    console.log(`${ENDPOINTS.LIKE_COMMENT_FORUM}`, payload);
    return await apiService.post(`${ENDPOINTS.LIKE_COMMENT_FORUM}`, {
      comment_uuid: payload.comment_uuid,
    });
  }
  static async deleteLikeCommentForum(payload: any) {
    console.log(`${ENDPOINTS.UNLIKE_COMMENT_FORUM}`, payload);
    return await apiService.delete(`${ENDPOINTS.UNLIKE_COMMENT_FORUM}`, {
      data: {comment_uuid: payload.comment_uuid},
    });
  }
  static async postRepCommentForum(payload: any) {
    console.log(`${ENDPOINTS.REP_COMMENT_FORUM}`, payload);
    return await apiService.post(`${ENDPOINTS.REP_COMMENT_FORUM}`, {
      forum_uuid: payload.forum_uuid,
      comment: payload.comment,
      parents_comment_uuid: payload.parents_comment_uuid,
    });
  }
  static async getRepCommentForum(payload: any) {
    console.log(
      `${ENDPOINTS.REP_COMMENT_FORUM}?parents_comment_uuid=${payload.parents_comment_uuid}&page=${payload.page}`,
    );
    return await apiService.get(
      `${ENDPOINTS.REP_COMMENT_FORUM}?parents_comment_uuid=${payload.parents_comment_uuid}&page=${payload.page}`,
    );
  }
}
