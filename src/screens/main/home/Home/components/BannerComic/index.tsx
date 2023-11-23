import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Image} from '@rneui/themed';
import useStyles from './styles';
import {Device} from '../../../../../../utils';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface CarouselDataItem {
  id: string;
  image: string;
}

const BannerComic = React.memo(() => {
  const styles = useStyles();
  const flatlistRef = useRef<FlatList | null>(null);
  const screenWidth = Device.getDeviceWidth();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    console.log('===========>', activeIndex);
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({
    item,
    index,
  }: {
    item: CarouselDataItem;
    index: number;
  }) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <FastImage
          source={{uri: item.image}}
          style={{height: screenWidth * 0.5, width: screenWidth}}
        />
      </TouchableOpacity>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.dotContainer}>
        {carouselData?.map((item, index) => {
          return (
            <Text
              key={item.id}
              style={activeIndex == index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
});

export default BannerComic;
const carouselData: CarouselDataItem[] = [
  {
    id: '1',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/2/solo-leveling-1620917554185396197198-16410674690231914720800.jpg',
  },
  {
    id: '2',
    image:
      'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/10/solo-leveling-1.jpg',
  },
  {
    id: '3',
    image:
      'https://geekculture.co/wp-content/uploads/2023/03/solo-leveling-anime-trailer.jpg',
  },
  {
    id: '4',
    image:
      'https://www.jeumobi.com/wp-content/uploads/2022/11/trailer-solo-leveling-arise.jpg',
  },
  {
    id: '5',
    image:
      'https://staticg.sportskeeda.com/editor/2023/01/6d2a5-16739045595947-1920.jpg',
  },
];
