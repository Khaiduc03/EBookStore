import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Forum from './Forum';
import CommentPost from './comment';
import CreatePost from './create-post';

export {default as Forum} from './Forum';
export const forumScreens: Screen[] = [
  {
    name: routes.FORUM,
    component: Forum,
  },
  {
    name: routes.CREATEPOST,
    component: CreatePost,
  },
  {
    name: routes.COMMENT_POST,
    component: CommentPost,
  },
];
