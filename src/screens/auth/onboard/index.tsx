import {Text} from '@rneui/themed';
import {useRef, useState} from 'react';
import {Animated, FlatList, TouchableOpacity, View} from 'react-native';
import {BigButton} from '../../../components';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AppActions} from '../../../redux/reducer';
import Pagination from './Pagination';
import SlideItem from './SlideItem';
import Slides from './slides';
import useStyles from './styles';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const totalSlides = Slides.length;
  const flatListRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const styles = useStyles();

  const handleReady = () => {
    dispatch(AppActions.handleReady(true));
    NavigationService.navigate(routes.LOBBY);
  };
  const handleNextButton = () => {
    if (index === totalSlides - 1) {
      return handleReady();
    }
    flatListRef.current.scrollToIndex({animated: true, index: index + 1});
    setIndex(index + 1);
  };

  const handlebackButton = () => {
    if (index === 0) {
      return;
    }
    flatListRef.current.scrollToIndex({animated: true, index: index - 1});
    setIndex(index + 1);
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
          <View
            style={styles.backButton}>
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
