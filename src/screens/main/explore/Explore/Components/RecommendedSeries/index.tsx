import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {useAppSelector} from '../../../../../../hooks';
import {getListTopView} from '../../../../../../redux/selectors/comic.selector';
import ItemRecommend from './components/ItemRecommend';
import {ComicType} from '../../../../../../redux';
import {HeaderCustom} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const RecommendedSeries = () => {
  const data = useAppSelector(getListTopView);
  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemRecommend data={item} />
  );

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom titleStyle={styles.textTitle} title="Recommended Series " />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={RenderItem}
        contentContainerStyle={{paddingHorizontal: 10, gap: 10}}
      />
    </View>
  );
};

export default RecommendedSeries;
