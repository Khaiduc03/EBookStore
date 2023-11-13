import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Forum from './Forum';
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
];
