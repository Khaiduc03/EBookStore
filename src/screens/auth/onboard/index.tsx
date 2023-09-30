import {Text} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {Animated, FlatList, TouchableOpacity, View} from 'react-native';
import {BigButton} from '../../../components';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import Pagination from './Pagination';
import SlideItem from './SlideItem';
import Slides from './slides';
import useStyles from './styles';
import {AppActions, AuthActions} from '../../../redux';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const styles = useStyles();

  const [index2, setIndex2] = useState(0);

  React.useEffect(() => {
    if (index2 === 3) {
      dispatch(AppActions.handleReady());
      NavigationService.navigate(routes.LOBBY);
    }
  }, [index2]);

  const handleNextButton = () => {
    if (index === 2) {
      setIndex2(index2 + 1);
      return;
    }
    flatListRef.current.scrollToIndex({animated: true, index: index + 1});
    setIndex(index + 1);
    setIndex2(index2 + 1);
  };

  const handlebackButton = () => {
    if (index === 0) {
      return;
    }
    flatListRef.current.scrollToIndex({animated: true, index: index - 1});
    setIndex(index - 1);
  };

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View style={styles.buttonContainer}>
        <View style={styles.nextButton}>
          <BigButton textButton="Next" onPressButton={handleNextButton} />
        </View>
        {index > 0 && (
          <View style={styles.backButton}>
            <TouchableOpacity onPress={handlebackButton}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Slider;
