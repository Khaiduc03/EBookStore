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
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {
  currentPageFavorite,
  getListFavorite,
  nextPageFavorite,
} from '../../../../../../../../redux/selectors/comic.selector';
import {getIsLoadingTopic} from '../../../../../../../../redux/selectors/loading.selector';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import ItemFavoritesList from '../ItemFavoritesList';

const FavoritesList: FunctionComponent = () => {
  const data = useAppSelector(getListFavorite);
  const nextPage = useAppSelector(nextPageFavorite);

  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);
  const current = useAppSelector(currentPageFavorite);
  const flatListRef = useRef<FlatList<ComicType>>(null);

  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(ComicActions.clearListFavorite());

    setTimeout(() => {
      setRefreshing(false);
      dispatch(ComicActions.getListFavorite(1));
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(ComicActions.getListFavorite(1));
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(ComicActions.getListFavorite(current ? current + 1 : 1));
    }
    setSize(true);
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

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemFavoritesList key={index} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        onContentSizeChange={onContentSizeChange}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.comic_uuid}
        showsVerticalScrollIndicator={false}
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

export default FavoritesList;
