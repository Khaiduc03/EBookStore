import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';
import {UserAction} from '../../../../../redux/reducer/user.reducer';
import {
  currentPagePostByUser,
  getAllUser,
  getListUserRandom,
  getPostByUser,
  nextPagePostByUser,
} from '../../../../../redux/selectors/user.selector';
import {getIsLoadingTopic} from '../../../../../redux/selectors/loading.selector';
import {AuthActions, getAuthUserProfile} from '../../../../../redux';
import {NavigationService} from '../../../../../navigation';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const dataUser = useAppSelector(getAllUser);
  const dataPost = useAppSelector(getPostByUser);
  const dataRandom = useAppSelector(getListUserRandom);
  const currentpage = useAppSelector(currentPagePostByUser);
  const nextPage = useAppSelector(nextPagePostByUser);
  const dataDiscover = dataRandom?.slice(0, 10);
  const isLoading = useAppSelector(getIsLoadingTopic);
  const [size, setSize] = useState<boolean>(false);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const user = useAppSelector(getAuthUserProfile);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(UserAction.getUserRandom(user.uuid!));
    dispatch(UserAction.getListUser());
    dispatch(UserAction.clearListPostByUser());
    dispatch(UserAction.getListPostByUser(1));

    return () => {};
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(UserAction.clearListPostByUser());
    dispatch(AuthActions.getUserInfo());
    dispatch(UserAction.getListPostByUser(1));

    setRefreshing(false);
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(UserAction.getListPostByUser(currentpage ? currentpage + 1 : 1));
      setSize(true);
    }
  };

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );

  const handlePressGoback = useCallback(() => {
    NavigationService.goBack();
  }, []);

  return {
    dataDiscover,
    dataPost,
    dataRandom,
    dataUser,
    isLoading,
    onContentSizeChange,
    loadMoreComic,
    sizeContent,
    user,
    handlePressGoback,
    onRefresh,
    refreshing,
  };
};
