import {FlatList, View} from 'react-native';

import React, {FunctionComponent, useEffect, useState} from 'react';
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
