import {StyleSheet, Text, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {ComicsNew} from '../Home/components';
import {ScrollView} from 'react-native-gesture-handler';

const ComicByTopic = () => {
  const styles = useStyles();
  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  const handlePressBack = () => {
    NavigationService.goBack();
  };
  const [numCols, setNumCols] = useState(2);

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(2);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Romance"
        leftIcon={{name: 'arrow-back', color: styles.iconStyle.color}}
        onPressLeftIcon={handlePressBack}
        rightIconleft={{name: 'search', type: 'ionicon'}}
        onPressRightIconLeft={handlePressSearch}
        rightIconRight={{name: 'tune'}}
      />
      <ScrollView>
        <HeaderCustom
          titleStyle={styles.textHeader}
          title="Show in "
          rightIconleft={{
            name: 'grid-outline',
            type: 'ionicon',
            color: numCols === 2 ? '#F89300' : '',
          }}
          rightIconRight={{
            name: 'list-circle-outline',
            type: 'ionicon',
            color: numCols === 1 ? '#F89300' : '',
          }}
          onPressRightIconLeft={handleGridIconPress}
          onPressRightIconRight={handleListIconPress}
        />
        <ComicsNew numCols={numCols} />
      </ScrollView>
    </View>
  );
};

export default ComicByTopic;
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
