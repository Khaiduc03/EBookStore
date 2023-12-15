import { useCallback, useEffect, useState } from 'react';
import { NativeScrollEvent } from 'react-native';
import { routes } from '../../../../../../constants';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { NavigationService } from '../../../../../../navigation';
import { ComicActions, TopicActions } from '../../../../../../redux';
import {
  getCurrentPageHome,
  getListComic,
  getListTopView,
  getNextPage,
} from '../../../../../../redux/selectors/comic.selector';
import {
  getIsLoadingHome,
  getIsLoadingPage,
  getIsLoadingStart,
} from '../../../../../../redux/selectors/loading.selector';
import { getListTopic } from '../../../../../../redux/selectors/topic.selector';

import useStyles from '../../styles';


export const useComicHome = () => {
  const dispatch = useAppDispatch();

  const [numCols, setNumCols] = useState<number>(3);
  const dataComic = useAppSelector(getListComic) || [];
  const dataTopic = useAppSelector(getListTopic);
  const nextPage = useAppSelector(getNextPage);
  const isLoading = useAppSelector(getIsLoadingPage);
  const dataTopView = useAppSelector(getListTopView);
  const current = useAppSelector(getCurrentPageHome);

  const isLoadingHome = useAppSelector(getIsLoadingHome);

  useEffect(() => {
    dispatch(ComicActions.clearListData());
    dispatch(ComicActions.getListData(1));
  }, []);

  useEffect(() => {
    if (!dataTopic?.length) {
      dispatch(TopicActions.getListTopic());
    }
    if (!dataTopView?.length) {
      dispatch(ComicActions.getListTopView());
    }
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(ComicActions.getListData(current ? current + 1 : 1));
    }
  };

  const handleListIconPress = useCallback(() => {
    setNumCols(1);
  }, []);

  const handleGridIconPress = useCallback(() => {
    setNumCols(3);
  }, []);

  const handlePressSearch = useCallback(() => {
    dispatch(ComicActions.ClearListBySearch());
    NavigationService.navigate(routes.SEARCH);
  }, []);

  function onScroll(nativeEvent: NativeScrollEvent) {
    const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;
    const numberOfPixelsFromBottomThreshold = 100;
    const isNearBottom =
      contentOffset.y + layoutMeasurement.height >=
      contentSize.height - numberOfPixelsFromBottomThreshold;

    if (isNearBottom) {
      loadMoreComic();
    }
  }

  return {
    loadMoreComic,
    handleGridIconPress,
    handleListIconPress,
    numCols,
    isLoading,
    dataComic,
    dataTopView,
    dataTopic,
    handlePressSearch,
    current,
    onScroll,
    isLoadingHome,
  };
};
