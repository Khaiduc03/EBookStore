import React from 'react';
import {View} from 'react-native';

import CarouselSquareList from './Components/CarouselSquareList';
import ListHotComic from './Components/ListHotComic';
import RecommendedSeries from './Components/RecommendedSeries';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderCustom} from '../../../../components';
import TrendingComic from './Components/TrendingComic';
import useStyles from './styles';

const data = [
  {
    title: 'Cô sáu mười ngón',
    category: 'Fantasy',
    image:
      'https://img.dtruyen.com/public/images/large/923/kieuthecokhonggiandayconlamgiaugsyQgwG.jpg',
  },
  {
    title: 'Cô chín mặt mu',
    category: 'Drama',
    image:
      'https://img.dtruyen.com/public/images/large/1023/trove80trothanhnuphubancondoiluongthucuWo1Sse.jpg',
  },
  {
    title: 'Cô mười ngự cu',
    category: 'Action',
    image:
      'https://img.dtruyen.com/public/images/large/thapnien70mynhanmemmairuLCZ6p.jpg',
  },
  {
    title: 'Cô hai chai mặt',
    category: 'Comedy',
    image:
      'https://img.dtruyen.com/public/images/large/thapnien90taohuonggiangxemqueCLnJfWG.jpg',
  },
  {
    title: 'Cô ba la ma to',
    category: 'Mystery',
    image:
      'https://img.dtruyen.com/public/images/large/923/trongsinhvethoinguyenthuylamruongZ2bsyDe.jpg',
  },
  {
    title: 'Cô cô nhiều chuyện',
    category: 'Horror',
    image:
      'https://img.dtruyen.com/public/images/large/823/quaphunhanongnuoiconlamgiauDk5ys24.jpg',
  },
];

const ExploreScreen: React.FC = () => {
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
        <View style={styles.backgoundPopular}>
          <CarouselSquareList data={data} autoPlay={false} pagination={true} />
        </View>
        <RecommendedSeries />
        <TrendingComic />
        <ListHotComic />
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
