import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderCustom} from '../../../../components';
import CarouselSquareList from './Components/CarouselSquareList';
import ListHotComic from './Components/ListHotComic';
import RecommendedSeries from './Components/RecommendedSeries';
import TrendingComic from './Components/TrendingComic';
import useStyles from './styles';

const data = [
  {
    title: 'Exemplary wife',
    category: 'Fantasy',
    image:
      'https://img.dtruyen.com/public/images/large/923/kieuthecokhonggiandayconlamgiaugsyQgwG.jpg',
  },
  {
    title: 'Porcelain flower girl',
    category: 'Drama',
    image:
      'https://img.dtruyen.com/public/images/large/1023/trove80trothanhnuphubancondoiluongthucuWo1Sse.jpg',
  },
  {
    title: 'The eyes of a lover',
    category: 'Action',
    image:
      'https://img.dtruyen.com/public/images/large/thapnien70mynhanmemmairuLCZ6p.jpg',
  },
  {
    title: 'Country girl',
    category: 'Comedy',
    image:
      'https://img.dtruyen.com/public/images/large/thapnien90taohuonggiangxemqueCLnJfWG.jpg',
  },
  {
    title: 'Young lady saves money to travel',
    category: 'Mystery',
    image:
      'https://img.dtruyen.com/public/images/large/923/trongsinhvethoinguyenthuylamruongZ2bsyDe.jpg',
  },
  {
    title: 'Girl selling chrysanthemums',
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
        titleStyle={styles.titleStyle}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'id-card', type: 'ionicon'}}
        title="Explore"
      />

      <View style={styles.backgoundPopular}>
        <CarouselSquareList data={data} autoPlay={false} pagination={true} />
      </View>
      <ScrollView>
        <RecommendedSeries />
        <TrendingComic />
        <ListHotComic />
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
