import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ComicItem, HeaderCustom, SearchCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {getDataComicBySeacrh} from '../../../../redux/selectors/comic.selector';
import {ComicActions, ComicType, TopicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {backScreen} from '../../../../utils';
import NoSearch from './components/NoSearch';
import {FlatList} from 'react-native-gesture-handler';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataBySearch = useAppSelector(getDataComicBySeacrh);
  const [numCols, setNumCols] = useState(3);
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (dataBySearch && dataBySearch.length !== 0) {
      setData([...data, ...dataBySearch]);
    }
  }, [dataBySearch]);

  const styles = useStyles();
  const [search, setSearch] = useState('');

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };

  const onPressSearch = () => {
    setData([]);
    dispatch(ComicActions.getListBySearch({key: search, page: 1}));
    setPage(2);
  };

  const loadMoreComic = () => {
    if (data.length > 0) {
      if (search) {
        setPage(page + 1);
        dispatch(ComicActions.getListBySearch({key: search, page: page}));
      }
    }
  };
  const onPressBackIcon = () => {
    dispatch(ComicActions.ClearListBySearch());
    backScreen();
  };

  return (
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
          />
        </View>
      </View>
      {data?.length == 0 ? (
        <NoSearch />
      ) : (
        <FlatList
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
  );
};

export default Search;
