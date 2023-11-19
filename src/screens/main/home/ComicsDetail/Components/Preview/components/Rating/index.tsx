import {Icon, Rating} from '@rneui/themed';
import React, {useState, useEffect, useRef} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import useStyles from './styles';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  runOnJS,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const RatingComic: React.FC = () => {
  const styles = useStyles();
  const data: number = 200;
  const totalWidth: number = 100;
  const animatedWidth = useSharedValue(0);

  useEffect(() => {
    const numericData = typeof data === 'number' ? data : 0;

    animatedWidth.value = withTiming(
      numericData,
      {duration: 1000, easing: Easing.linear},
      finished => {
        if (finished) {
          runOnJS(onAnimationComplete)();
        }
      },
    );
  }, [data]);

  const onAnimationComplete = () => {
    // Code to run when the animation is complete
  };

  const animatedLineStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      backgroundColor: '#4CAF50',
    };
  });

  const remainingLineStyle = useAnimatedStyle(() => {
    return {
      width: totalWidth - animatedWidth.value,
      backgroundColor: 'black',
    };
  });
  const ratingCompleted = (rating: Number) => {
    console.log('Rating is: ');
  };
  const [rating, setrating] = useState(false);
  const rating1 = () => {
    setrating(!rating);
  };
  console.log('dasd', rating1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textRating}>Rating & Reviews</Text>
        <Icon name="arrow-right" type="font-awesome-5" />
      </View>
      <View style={styles.content}>
        <View style={styles.viewRating1}>
          <Text style={styles.numberRating}>4.9</Text>

          {/* <View style={{width: 200, height: 30,backgroundColor:'blue'}}> */}

          {/* </View> */}

          <Text style={styles.numberReviews}>(6.8k reviews)</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.viewRating2}>
        <View style={styles.lineContainer}>
          <Animated.View style={[styles.line, animatedLineStyle]} />
          <Animated.View style={[styles.line, remainingLineStyle]} />
        </View>
      </View>
      <Rating
        startingValue={3.6}
        // ratingCount={5}
        // onFinishRating={rating1}
        // onStartRating={ratingCompleted}
        ratingColor="pink"
        type="custom"
      />
    </View>
  );
};

export default RatingComic;
