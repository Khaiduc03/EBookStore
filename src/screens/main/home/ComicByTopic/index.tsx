import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {ComicItem, HeaderCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {backScreen} from '../../../../utils';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, ComicType, LoadingActions} from '../../../../redux';
import {
  getCurrentTopic,
  getDataByTopic,
  getListComic,
  getNextTopic,
} from '../../../../redux/selectors/comic.selector';
import {
  getIsLoading,
  getIsLoadingPage,
  getIsLoadingTopic,
} from '../../../../redux/selectors/loading.selector';
import {useRoute} from '@react-navigation/native';

interface RouteParamsIdTopic {
  uuid: string;
  name: string;
}

const ComicByTopic = () => {
  const route = useRoute();
  const nameTopic = (route.params as RouteParamsIdTopic).name;
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getDataByTopic) || [];
  // console.log('========>', dataComic);
  const nextPage = useAppSelector(getNextTopic);
  const currentPage = useAppSelector(getCurrentTopic);
  const [numCols, setNumCols] = useState<number>(3);
  const isLoading = useAppSelector(getIsLoadingTopic);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);

  useEffect(() => {
    dispatch(ComicActions.getListByTopic({page: 1, name: nameTopic}));
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(
        ComicActions.getListByTopic({
          page: currentPage ? currentPage + 1 : 1,
          name: nameTopic,
        }),
      );
      setSize(true);
    }
  };

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ComicItem
      data={item}
      viewStyle={numCols == 1 ? styles.comicItem : null}
      imageStyle={numCols == 1 ? styles.imgComic : null}
      contentStyle={numCols == 1 ? styles.content : null}
      topicStyle={numCols == 1 ? styles.topicsContainer : null}
    />
  );

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };

  const styles = useStyles();

  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator color={'#F89300'} size={'large'} />;
  }, []);

  return (
    <View style={styles.container}>
      <HeaderCustom
        title={nameTopic}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'arrow-back', color: styles.leftIconStyle.color}}
        onPressLeftIcon={() => backScreen()}
        rightIconRight={{name: 'search', type: 'ionicon'}}
        onPressRightIconRight={handlePressSearch}
      />

      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => {
          return (
            <HeaderCustom
              titleStyle={styles.titleHeaderStyle}
              title="Show in "
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
          );
        }}
        columnWrapperStyle={
          numCols === 3 ? {gap: 5} : {flexDirection: 'column'}
        }
        data={dataComic}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        onContentSizeChange={onContentSizeChange}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            sizeContent - numberOfPixelsFromBottomThreshold;
          console.log(
            'sỉze scroll',
            contentOffset.y + layoutMeasurement.height,
          );
          console.log('sỉze content', sizeContent);

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
      />
    </View>
  );
};

export default ComicByTopic;
