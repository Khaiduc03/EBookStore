import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {ComicItem, HeaderCustom, SearchCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {
  getCurrentSearch,
  getDataComicBySeacrh,
  getNextSearch,
} from '../../../../redux/selectors/comic.selector';
import {ComicActions, ComicType, TopicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {backScreen} from '../../../../utils';
import {FlatList} from 'react-native-gesture-handler';
import ErrorSearch from './components/ErrorSearch';
import NoSearch from './components/NoSearch';
import {getIsLoadingTopic} from '../../../../redux/selectors/loading.selector';
import {useRoute} from '@react-navigation/native';
interface RouteParamsFillter {
  highestView?: boolean;
  lowestViews?: boolean;
}
const Search = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const dataBySearch = useAppSelector(getDataComicBySeacrh);
  const currentPage = useAppSelector(getCurrentSearch);
  const nextPage = useAppSelector(getNextSearch);
  const [numCols, setNumCols] = useState(3);
  const [hightView, setHightView] = useState(Boolean);

  const [lowView, setLowView] = useState(Boolean);

  const [data, setData] = useState<ComicType[]>([]);
  console.log('========>hightView', hightView);
  console.log('========>lowView', lowView);

  const isLoading = useAppSelector(getIsLoadingTopic);

  const styles = useStyles();
  const [search, setSearch] = useState('');

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };

  const sortReduceDataByViews = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => b.views - a.views);
  };

  const sortIncreaseDataByViews = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => a.views - b.views);
  };

  useEffect(() => {
    if (dataBySearch) {
      if (hightView) {
        setData(sortReduceDataByViews(dataBySearch));
      } else if (lowView) {
        setData(sortIncreaseDataByViews(dataBySearch));
      } else {
        setData(dataBySearch);
      }
    }
  }, [dataBySearch, hightView, lowView]);

  const onPressSearch = () => {
    setHightView(false);
    setLowView(false);
    dispatch(ComicActions.ClearListBySearch());
    dispatch(ComicActions.getListBySearch({key: search, page: 1}));
  };

  const loadMoreComic = () => {
    if (search && nextPage && !isLoading) {
      dispatch(
        ComicActions.getListBySearch({
          key: search,
          page: currentPage && currentPage + 1,
        }),
      );
    }
  };
  const onPressBackIcon = () => {
    dispatch(ComicActions.ClearListBySearch());
    backScreen();
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={onPressBackIcon} style={styles.iconBack}>
            <Icon name="arrow-back" type="ionicon" />
          </TouchableOpacity>
          <View style={styles.search}>
            <SearchCustom
              value={search}
              setValue={setSearch}
              onPress={onPressSearch}
              autoFocus={true}
            />
          </View>
          <TouchableOpacity
            style={styles.btnFilters}
            onPress={() => {
              NavigationService.navigate(routes.FILTERS, {
                setHightView,
                setLowView,
              });
              Keyboard.dismiss();
            }}>
            <Icon
              name="options-outline"
              type="ionicon"
              size={24}
              color={styles.colorFilters.color}
            />
          </TouchableOpacity>
        </View>

        {data?.length === 0 ? (
          <NoSearch />
        ) : (
          <FlatList
            ListFooterComponent={
              isLoading ? isLoading && listFooterComponent : undefined
            }
            ListHeaderComponent={() => {
              return (
                <HeaderCustom
                  titleStyle={styles.textTitle}
                  title="Search comic"
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
            data={data}
            key={numCols.toString()}
            numColumns={numCols}
            columnWrapperStyle={
              numCols === 3 ? {gap: 5, paddingHorizontal: 16} : null
            }
            onEndReached={loadMoreComic}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;
