import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useStyles from './styles';

import ItemHistoryList from '../ItemHistoryList';
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {getIsLoadingTopic} from '../../../../../../../../redux/selectors/loading.selector';
import {
  ComicActions,
  ComicType,
  getListHistory,
  nextPageHistory,
} from '../../../../../../../../redux';

const HistoryList: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);
  const data = useAppSelector(getListHistory);
  const nextPage = useAppSelector(nextPageHistory);

  console.log('============>', data);

  useEffect(() => {
    dispatch(ComicActions.getListHistotyComic(page));
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

  const RenderItem = ({item}: {item: ComicType}) => (
    <ItemHistoryList key={item.uuid} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
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

export default HistoryList;
