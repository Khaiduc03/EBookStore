import React, {FunctionComponent, useEffect} from 'react';

import {View, Text, FlatList} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import ItemFavoritesList from '../ItemFavoritesList';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  getListFavorite,
  nextPageFavorite,
} from '../../../../../../redux/selectors/comic.selector';
import {ComicActions} from '../../../../../../redux';
ItemFavoritesList;

const FavoritesList: FunctionComponent = () => {
  const data = useAppSelector(getListFavorite);
  const nextPage = useAppSelector(nextPageFavorite);
  const styles = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ComicActions.getListFavorite(1));
  }, []);

  const RenderItem = ({item}: any) => <ItemFavoritesList data={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavoritesList;
