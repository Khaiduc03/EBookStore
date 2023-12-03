import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import _ from 'lodash';
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
import {ToastAndroid} from 'react-native';
import SearchCustomV1 from '../../../../components/customs/SearchV1';
const Search = () => {
  const dispatch = useAppDispatch();
  const dataBySearch = useAppSelector(getDataComicBySeacrh);
  const currentPage = useAppSelector(getCurrentSearch);
  const nextPage = useAppSelector(getNextSearch);
  const [numCols, setNumCols] = useState(3);
  const [hightView, setHightView] = useState(Boolean);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);

  const [lowView, setLowView] = useState(Boolean);
  const [filterArray, setFilterArray] = useState<string[]>([]);

  console.log('==========>fillter', filterArray);

  const [data, setData] = useState<ComicType[]>([]);

  const isLoading = useAppSelector(getIsLoadingTopic);

  const styles = useStyles();
  const [search, setSearch] = useState('');

  const handleSearch = _.debounce(searchQuery => {
    if (searchQuery) {
      setFilterArray([]), setHightView(false);
      setLowView(false);
      dispatch(ComicActions.ClearListBySearch());
      dispatch(ComicActions.getListBySearch({key: searchQuery, page: 1}));
    }
  }, 3000);

  const onSearchChange = (text: any) => {
    setSearch(text);
    handleSearch(text);
  };

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
      let filteredData = [...dataBySearch];
      if (filterArray.includes('All')) {
        setData(filteredData);
        ToastAndroid.show(
          'Successful comic by fillter !!!!',
          ToastAndroid.SHORT,
        );
        return;
      }

      if (filterArray.length > 0) {
        filteredData = filteredData.filter(item => {
          return filterArray.every(topic => item.topics.includes(topic));
        });
      }
      if (hightView) {
        filteredData = sortReduceDataByViews(filteredData);
      } else if (lowView) {
        filteredData = sortIncreaseDataByViews(filteredData);
      }

      setData(filteredData);
    }
  }, [dataBySearch, hightView, lowView, filterArray]);

  const onPressSearch = () => {
    setFilterArray([]), setHightView(false);
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
      setSize(true);
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={onPressBackIcon} style={styles.iconBack}>
            <Icon name="arrow-back" type="ionicon" />
          </TouchableOpacity>
          <View style={styles.search}>
            <SearchCustomV1
              value={search}
              onChangeText={onSearchChange}
              onSubmitEditing={onPressSearch}
              autoFocus={true}
            />
          </View>
          <TouchableOpacity
            style={styles.btnFilters}
            onPress={() => {
              NavigationService.navigate(routes.FILTERS, {
                setHightView,
                setLowView,
                setFilterArray,
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
            showsVerticalScrollIndicator
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
                topicStyle={numCols == 1 ? styles.topicsContainer : null}
              />
            )}
            onContentSizeChange={onContentSizeChange}
            onScroll={({nativeEvent}) => {
              const {contentOffset, contentSize, layoutMeasurement} =
                nativeEvent;
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
            data={data}
            numColumns={3}
            columnWrapperStyle={
              numCols === 3
                ? {gap: 5, paddingHorizontal: 16}
                : {flexDirection: 'column'}
            }
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;
