import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from '../Pagination';
import useStyles from './styles';

type carouselSquareListProps = {
  data: any;
  autoPlay?: boolean;
  pagination?: boolean;
};

const CarouselSquareList: React.FC<carouselSquareListProps> = ({
  data,
  autoPlay,
  pagination,
}) => {
  const styles = useStyles();

  const scrollViewRef = useAnimatedRef() as any;

  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.58;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={() => {}}
        onMomentumScrollEnd={e => {
          offSet.value = e.nativeEvent.contentOffset.x;
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.8, 1, 0.8],
            );
            const isValidScale = !isNaN(scale) && isFinite(scale); // Check if scale is a valid number
            return {
              transform: isValidScale ? [{scale}] : [], // Apply transform only if scale is a valid number
            };
          });
          if (!item.image) {
            return <View style={{width: SPACER}} key={index} />;
          }
          return (
            <View
              style={[styles.viewCenter, styles.viewItem, {width: SIZE}]}
              key={index}>
              <Animated.View
                style={[styles.imageContainer, style] as ViewStyle}>
                <TouchableOpacity onPress={() => console.log('hihi')}>
                  <Image source={{uri: item.image}} style={styles.image} />
                </TouchableOpacity>
              </Animated.View>
              <View style={styles.viewCenter}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default CarouselSquareList;
