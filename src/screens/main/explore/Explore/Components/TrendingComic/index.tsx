import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import ItemTrending from './components/ItemTrending';
import {HeaderCustom} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {ComicActions, ComicType} from '../../../../../../redux';
import {getListTopView} from '../../../../../../redux/selectors/comic.selector';

const TrendingComic = () => {
  const styles = useStyles();

  const data = useAppSelector(getListTopView);

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemTrending index={index} data={item} />
  );
  const handlePressTrending = () => {
    NavigationService.navigate(routes.VIEW_EXPLORE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.textTitle}
        title="Top view "
        rightIconRight={{
          name: 'arrow-forward-outline',
          type: 'ionicon',
        }}
        onPressRightIconRight={handlePressTrending}
      />
      {data ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16, gap: 5}}
          data={data}
          renderItem={RenderItem}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default TrendingComic;
