import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useStyles from './styles';

type paginationProps = {
  data: any;
  x: any;
  size: any;
};

const Pagination: React.FC<paginationProps> = ({
  data,
  x,
  size,
}: paginationProps) => {
  const styles = useStyles();

  return (
    <View style={styles.paginationContainer}>
      {Array.from({length: 6})
        .fill(0)
        .map((_: any, i: number) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animatedDotStyle = useAnimatedStyle(() => {
            const widthAnimation = interpolate(
              x.value,
              [(i - 1) * size, i * size, (i + 1) * size],
              [10, 20, 10],
              Extrapolate.CLAMP,
            );
            const opacityAnimation = interpolate(
              x.value,
              [(i - 1) * size, i * size, (i + 1) * size],
              [0.5, 1, 0.5],
              Extrapolate.CLAMP,
            );
            return {
              width: widthAnimation,
              opacity: opacityAnimation,
            };
          });
          return (
            <Animated.View style={[styles.dots, animatedDotStyle]} key={i} />
          );
        })}
    </View>
  );
};

export default Pagination;
