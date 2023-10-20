import {View, ScrollView, Image, FlatList} from 'react-native';

import React, {FunctionComponent, useEffect, useState} from 'react';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {ComicItem, HeaderCustom} from '../../../../components';

import {createIcon} from '../../../../utils';
import {TopicsHome, ComicsNew, BannerComic, TrendingComic} from './components';
import {
  ComicActions,
  ComicType,
  TopicActions,
  getAuthEnableSignIn,
} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  getListComic,
  getNextPage,
  getTotalPage,
} from '../../../../redux/selectors/comic.selector';
import {getListTopic} from '../../../../redux/selectors/topic.selector';

const Home: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const [numCols, setNumCols] = useState(3);
  const [data, setData] = useState<ComicType[]>([]);
  const [page, setPage] = useState(1);
  const dataComic = useAppSelector(getListComic) || [];
  const dataTopic = useAppSelector(getListTopic);
  const nextPage = useAppSelector(getNextPage);

  useEffect(() => {
    dispatch(ComicActions.getListData(page));
    if (dataTopic?.length === undefined) {
      dispatch(TopicActions.getListTopic());
    }
  }, [page]);

  useEffect(() => {
    if (dataComic.length > 0) {
      setData([...data, ...dataComic]);
    }
  }, [dataComic]);

  const loadMoreComic = () => {
    if (nextPage) {
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

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.textTitleHeader}
        onPressRightIconLeft={handlePressSearch}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="ComicVerse"
        rightIconleft={{name: 'search', type: 'ionicon'}}
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
        data={data}
        key={numCols.toString()}
        columnWrapperStyle={
          numCols === 3 ? {gap: 5, paddingHorizontal: 16} : null
        }
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
                rightIconleft={{
                  name: 'grid-outline',
                  type: 'ionicon',
                  color: numCols === 3 ? '#F89300' : '',
                }}
                rightIconRight={{
                  name: 'list-circle-outline',
                  type: 'ionicon',
                  color: numCols === 1 ? '#F89300' : '',
                }}
                onPressRightIconLeft={handleGridIconPress}
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
