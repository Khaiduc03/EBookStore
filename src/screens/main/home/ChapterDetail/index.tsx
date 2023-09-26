import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Device} from '../../../../utils';
import useStyles from './styles';
import {FooterChapter, HeaderChapter} from './Components';
import {SafeAreaView} from 'react-native-safe-area-context';

const WIDTH = Device.getDeviceWidth();

function ChapterDetail() {
  const styles = useStyles();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const toggleHeaderFooter = () => {
    setShowHeader(!showHeader);
    setShowFooter(!showFooter);
  };

  const renderHeader = () => {
    if (showHeader) {
      return <HeaderChapter />;
    } else {
      return null;
    }
  };
  const renderFooter = () => {
    if (showFooter) {
      return <FooterChapter />;
    } else {
      return null;
    }
  };

  const renderItem = ({item}: any) => {
    return <Image style={styles.imageStyle} source={{uri: item.image}} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleHeaderFooter} activeOpacity={1}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          onScroll={() => {
            if (showHeader || showFooter) {
              setShowHeader(false);
              setShowFooter(false);
            }
          }}
          scrollEventThrottle={16}
        />
      </TouchableOpacity>
      {renderHeader()}
      {renderFooter()}
      {/* <StatusBar
        showHideTransition={'fade'}
        animated={true}
        hidden={showHeader ? false : true}
      /> */}
    </View>
  );
}

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
  {
    id: 11,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
  {
    id: 12,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
  {
    id: 13,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
  {
    id: 14,
    name: 'Boruto & Itachi',
    topic: 'Dallis',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
    rate: 4.41,
  },
];
