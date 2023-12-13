import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {getPostById} from '../../../../../../../redux/selectors/user.selector';
import {UserAction} from '../../../../../../../redux/reducer/user.reducer';
import {ForumActions} from '../../../../../../../redux';
import {ForumType} from '../../../../../../../redux/types/forum.type';

type UseGetPostDetailType = {
  post_id: string;
  forum_uuid: string;
};

export const useGetPostDetail = (props: UseGetPostDetailType) => {
  const {post_id, forum_uuid} = props;
  const dispatch = useAppDispatch();
  const postData = useAppSelector(getPostById);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(UserAction.getPostById(post_id));
    return () => {};
  }, []);

  useEffect(() => {
    setLike(postData?.is_liked!);
    setCount(postData?.like_count!);
    return () => {};
  }, [postData]);

  const onPressLike = () => {
    if (like) {
      dispatch(ForumActions.deleteLikeForum(forum_uuid));
      setLike(false);
      setCount(count - 1);
    } else {
      dispatch(ForumActions.postLikeForum(forum_uuid));
      setLike(true);
      setCount(count + 1);
    }
  };

  return {
    postData,
    onPressLike,
    like,
    count,
  };
};
