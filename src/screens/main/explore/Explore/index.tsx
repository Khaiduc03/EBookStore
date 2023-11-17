import React, {FunctionComponent} from 'react';
import {View, FlatList} from 'react-native';
import useStyles from './styles';
import ItemListHot from './Components/ListHotComic/components/ItemListHot';
import ListHotComic from './Components/ListHotComic';
import TrendingComic from './Components/TrendingComic';
import ItemRecommend from './Components/RecommendedSeries/components/ItemRecommend';
import RecommendedSeries from './Components/RecommendedSeries';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderCustom} from '../../../../components';

const Explore: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.textTitleHeader}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'id-card', type: 'ionicon'}}
        title="Explore"
      />
      <ScrollView>
        <RecommendedSeries />
        <TrendingComic />
        <ListHotComic />
      </ScrollView>
    </View>
  );
};

export default Explore;
