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
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {
  getListFavorite,
  nextPageFavorite,
} from '../../../../../../../../redux/selectors/comic.selector';
import {getIsLoadingTopic} from '../../../../../../../../redux/selectors/loading.selector';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import ItemFavoritesList from '../ItemFavoritesList';

const FavoritesList: FunctionComponent = () => {
  const data = useAppSelector(getListFavorite);
  const nextPage = useAppSelector(nextPageFavorite);
  const [page, setPage] = useState(1);
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);

  const [refreshing, setRefreshing] = React.useState(false);

  console.log('============>', page);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(ComicActions.clearListFavorite());

    setTimeout(() => {
      setRefreshing(false);
      dispatch(ComicActions.getListFavorite(1));
      setPage(1);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(ComicActions.getListFavorite(page));
  }, [page]);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      setPage(page + 1);
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

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemFavoritesList key={index} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.comic_uuid}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreComic}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default FavoritesList;
