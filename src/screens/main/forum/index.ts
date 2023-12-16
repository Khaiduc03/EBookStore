import { routes } from '../../../constants';
import { Screen } from '../../../types';
import Forum from './Forum';
import CreatePost from './create-post';
import CommentForum from './comment-forum';
import CommentRepForum from './comment-rep-forum';

export { default as Forum } from './Forum';
export const forumScreens: Screen[] = [
  {
    name: routes.FORUM,
    component: Forum,
  },
  {
    name: routes.CREATE_POST,
    component: CreatePost,
  },
  {
    name: routes.COMMENT_FORUM,
    component: CommentForum,
  },
  {
    name: routes.COMMENT_REP_FORUM,
    component: CommentRepForum,
  },
];
