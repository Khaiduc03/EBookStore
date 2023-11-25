import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import useStyles from './styles';

import ItemHistoryList from '../ItemHistoryList';
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {getIsLoadingTopic} from '../../../../../../../../redux/selectors/loading.selector';
import {
  ComicActions,
  ComicType,
  currentPageHistory,
  getListHistory,
  nextPageHistory,
} from '../../../../../../../../redux';

const HistoryList: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);
  const data = useAppSelector(getListHistory);
  const nextPage = useAppSelector(nextPageHistory);
  const [refreshing, setRefreshing] = React.useState(false);
  const current = useAppSelector(currentPageHistory);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(ComicActions.clearListHistory());

    setTimeout(() => {
      setRefreshing(false);
      dispatch(ComicActions.getListHistotyComic(1));
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(ComicActions.getListHistotyComic(1));
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(ComicActions.getListHistotyComic(current ? current + 1 : 1));
    }
  };

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        style={{marginBottom: 10}}
        size={'large'}
        color={'#F89300'}
      />
    );
  }, []);

  const RenderItem = ({item}: {item: ComicType}) => (
    <ItemHistoryList key={item.uuid} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            contentSize.height - numberOfPixelsFromBottomThreshold;

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default HistoryList;
