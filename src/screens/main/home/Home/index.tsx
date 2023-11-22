import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Alert,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import {ComicItem, HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, ComicType, TopicActions} from '../../../../redux';
import {
  getCurrentPageHome,
  getListComic,
  getListTopView,
  getNextPage,
} from '../../../../redux/selectors/comic.selector';
import {getListTopic} from '../../../../redux/selectors/topic.selector';
import {createIcon} from '../../../../utils';
import {BannerComic, TopicsHome, TrendingComic} from './components';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';
import OverLay from './components/OverLay';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const [numCols, setNumCols] = useState<number>(3);
  const dataComic = useAppSelector(getListComic) || [];
  const dataTopic = useAppSelector(getListTopic);
  const nextPage = useAppSelector(getNextPage);
  const isLoading = useAppSelector(getIsLoadingPage);
  const dataTopView = useAppSelector(getListTopView);
  const current = useAppSelector(getCurrentPageHome);
  const flatListRef = useRef<FlatList<ComicType>>(null);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const [backCount, setBackCount] = useState<number>(0);
  console.log('========', backCount);

  const handleBackPress = () => {
    if (backCount !== 1) {
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
      setBackCount(prevCount => prevCount + 1);
      setTimeout(() => {
        setBackCount(0);
      }, 5000);
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      backHandler.remove();
    };
  }, [backCount]);

  useEffect(() => {
    dispatch(ComicActions.clearListData());
    dispatch(ComicActions.getListData(1));
  }, []);

  useEffect(() => {
    if (!dataTopic?.length) {
      dispatch(TopicActions.getListTopic());
    }
    if (!dataTopView?.length) {
      dispatch(ComicActions.getListTopView());
    }
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(ComicActions.getListData(current ? current + 1 : 1));
      setSize(true);
    }
  };

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };
  const handlePressSearch = () => {
    dispatch(ComicActions.ClearListBySearch());
    NavigationService.navigate(routes.SEARCH);
  };

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    // Update contentSize as needed
    flatListRef.current?.setNativeProps({
      contentSize: {width: contentWidth, height: contentHeight},
    });
    setSizeContent(contentHeight);
    if (size) {
      setSizeContent(sizeContent + 3000);
      setSize(false);
    }
  };

  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator size={'large'} color={'#F89300'} />;
  }, []);

  return (
    <View style={styles.container}>
      {current == 1 ? <OverLay /> : <View />}
      <HeaderCustom
        titleStyle={styles.textTitleHeader}
        onPressRightIconMiddle={handlePressSearch}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="ComicVerse"
        rightIconMiddle={{name: 'search', type: 'ionicon'}}
        rightIconRight={createIcon({
          name: 'notifications-outline',
          type: 'ionicon',
        })}
        onPressRightIconRight={() =>
          NavigationService.navigate(routes.NOTIFICATIONS)
        }
      />

      <FlatList
        initialNumToRender={21}
        onContentSizeChange={onContentSizeChange}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        renderItem={({item, index}) => (
          <ComicItem
            data={item}
            viewStyle={numCols === 1 ? styles.comicItem : undefined}
            imageStyle={numCols === 1 ? styles.imgComic : undefined}
            contentStyle={numCols === 1 ? styles.content : undefined}
            topicStyle={numCols === 1 ? styles.topicsContainer : undefined}
          />
        )}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            sizeContent - numberOfPixelsFromBottomThreshold;

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        data={dataComic}
        key={numCols.toString()}
        columnWrapperStyle={
          numCols === 3 ? {gap: 5, paddingHorizontal: 16} : undefined
        }
        keyExtractor={item => item.uuid}
        numColumns={numCols}
        ListHeaderComponent={() => {
          return (
            <View>
              <BannerComic />
              <TopicsHome />
              <TrendingComic />
              <HeaderCustom
                titleStyle={styles.textTitle}
                title="New Comics"
                rightIconMiddle={{
                  name: 'grid-outline',
                  type: 'ionicon',
                  color: numCols === 3 ? '#F89300' : '',
                }}
                rightIconRight={{
                  name: 'list-circle-outline',
                  type: 'ionicon',
                  color: numCols === 1 ? '#F89300' : '',
                }}
                onPressRightIconMiddle={handleGridIconPress}
                onPressRightIconRight={handleListIconPress}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
