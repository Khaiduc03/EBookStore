import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
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
  const flatListRef = useRef<FlatList<ComicType>>(null);

  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);

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
      setSize(true);
    }
  };
  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      flatListRef.current?.setNativeProps({
        contentSize: {width: contentWidth, height: contentHeight},
      });
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );

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
        onContentSizeChange={onContentSizeChange}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            sizeContent - numberOfPixelsFromBottomThreshold;

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
