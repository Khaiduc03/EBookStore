import {routes} from '../../../constants';
import {Screen} from '../../../types';
import CommentForum from './comment-forum';
import Forum from './Forum';
import CreatePost from './create-post';

export {default as Forum} from './Forum';
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
];
