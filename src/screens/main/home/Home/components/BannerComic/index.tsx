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

interface CarouselDataItem {
  id: string;
  image: string;
}

const BannerComic: React.FC = () => {
  const styles = useStyles();
  const flatlistRef = useRef<FlatList | null>(null);
  const screenWidth = Device.getDeviceWidth();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
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
      <View>
        <Image
          source={{uri: item.image}}
          style={{height: screenWidth * 0.5, width: screenWidth}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
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
};

export default BannerComic;
const carouselData: CarouselDataItem[] = [
  {
    id: '1',
    image:
      'https://png.pngtree.com/background/20230519/original/pngtree-the-manga-couple-of-anime-i-love-you-in-autumn-picture-image_2664667.jpg',
  },
  {
    id: '2',
    image:
      'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/05/kaeya-voi-diluc-genshin-impact-tro-choi-dien-tu-anime-hinh-nen-2560x1440_51.jpg',
  },
  {
    id: '3',
    image:
      'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/05/Destiny-Girl-codes.jpg',
  },
  {
    id: '4',
    image: 'https://wallpaperaccess.com/full/10822.jpg',
  },
  {
    id: '5',
    image:
      'https://e0.pxfuel.com/wallpapers/463/451/desktop-wallpaper-lookism.jpg',
  },
];