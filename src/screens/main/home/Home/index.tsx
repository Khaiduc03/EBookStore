import {FlatList, View} from 'react-native';

import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {ComicItem, HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, ComicType, TopicActions} from '../../../../redux';
import {
  getListComic,
  getNextPage,
} from '../../../../redux/selectors/comic.selector';
import {getListTopic} from '../../../../redux/selectors/topic.selector';
import {createIcon} from '../../../../utils';
import {BannerComic, TopicsHome, TrendingComic} from './components';
import {ActivityIndicator} from 'react-native';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const [numCols, setNumCols] = useState(3);
  const [page, setPage] = useState(1);
  const dataComic = useAppSelector(getListComic) || [];
  const dataTopic = useAppSelector(getListTopic);
  const nextPage = useAppSelector(getNextPage);
  const isLoading = useAppSelector(getIsLoadingPage);

  useEffect(() => {
    dispatch(ComicActions.getListData(page));

    if (dataTopic?.length === undefined) {
      dispatch(TopicActions.getListTopic());
    }
  }, [page]);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      setPage(page + 1);
    }
  };

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };
  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        style={{marginBottom: 10}}
        size={'large'}
        color={'#F89300'}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
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
      />

      <FlatList
        renderItem={({item, index}: {item: ComicType; index: number}) => (
          <ComicItem
            data={item}
            viewStyle={numCols == 1 ? styles.comicItem : null}
            imageStyle={numCols == 1 ? styles.imgComic : null}
            contentStyle={numCols == 1 ? styles.content : null}
            index={index}
            topicStyle={numCols == 1 ? styles.topicsContainer : null}
          />
        )}
        onEndReached={loadMoreComic}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading ? isLoading && listFooterComponent : undefined
        }
        data={dataComic}
        key={numCols.toString()}
        columnWrapperStyle={
          numCols === 3 ? {gap: 5, paddingHorizontal: 16} : null
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
