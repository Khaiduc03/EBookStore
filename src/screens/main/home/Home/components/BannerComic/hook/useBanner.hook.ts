import {useEffect, useRef, useState} from 'react';
import {Device} from '../../../../../../../utils';
import {FlatList} from 'react-native';

export interface CarouselDataItem {
  id: string;
  image: string;
}

export const useBanner = () => {
  const screenWidth = Device.getDeviceWidth();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const flatlistRef = useRef<FlatList | null>(null);
  const [isLoading, setLoading] = useState(false);

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

  const getItemLayout = (_: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };

  return {
    handleScroll,
    getItemLayout,
    screenWidth,
    activeIndex,
    flatlistRef,
    isLoading,
    setLoading,
    onLoadEnd,
    onLoadStart,
  };
};

export const carouselData: CarouselDataItem[] = [
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
