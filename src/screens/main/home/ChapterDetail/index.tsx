import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import useStyles from './styles';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const ChapterDetail = () => {
  const styles = useStyles();
  const renderItem = ({item}: any) => {
    return (
      <Image
        style={{width: WIDTH, height: HEIGHT * 0.4}}
        source={{uri: item.image}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default ChapterDetail;
const data = [
  {
    id: 1,
    name: 'Boruto & Itachi',
    topic: 'Tiffany',
    image:
      'https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg',
    rate: 3.28,
  },
  {
    id: 2,
    name: 'Boruto & Itachi',
    topic: 'Osmond',
    image:
      'https://i.pinimg.com/1200x/a5/6d/47/a56d47ee7a756a257dec50dfbf87b625.jpg',
    rate: 2.25,
  },
  {
    id: 3,
    name: 'Boruto & Itachi',
    topic: 'Stan',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-2.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    name: 'Boruto & Itachi',
    topic: 'Maggie',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-3.jpg',
    rate: 3.26,
  },
  {
    id: 5,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
  {
    id: 6,
    name: 'Boruto & Itachi ',
    topic: 'Tiffany',
    image:
      'https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg',
    rate: 3.28,
  },
  {
    id: 7,
    name: 'Boruto & Itachi',
    topic: 'Osmond',
    image:
      'https://i.pinimg.com/1200x/a5/6d/47/a56d47ee7a756a257dec50dfbf87b625.jpg',
    rate: 2.25,
  },
  {
    id: 8,
    name: 'Boruto & Itachi',
    topic: 'Stan',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-2.jpg',
    rate: 4.5,
  },
  {
    id: 9,
    name: 'Boruto & Itachi',
    topic: 'Maggie',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-3.jpg',
    rate: 3.26,
  },
  {
    id: 10,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
];