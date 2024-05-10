import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';

import {HeaderCustom} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {ComicActions, ComicType} from '../../../../../../redux';
import {
  getListTopRating,
  getListTopView,
} from '../../../../../../redux/selectors/comic.selector';
import ItemTopViewList from '../TopViewComic/components/ItemTopViewList';
import ItemTopRatingList from './components/ItemTopRatingList';

const TopListRating = () => {
  const styles = useStyles();

  const data = useAppSelector(getListTopRating);

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemTopRatingList index={index} data={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={RenderItem} />
    </View>
  );
};

export default TopListRating;
