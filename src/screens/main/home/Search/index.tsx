import {Icon} from '@rneui/themed';
import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ComicItem, HeaderCustom} from '../../../../components';
import SearchCustomV1 from '../../../../components/customs/SearchV1';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import {ComicType} from '../../../../redux';
import NoSearch from './components/NoSearch';
import {useSearch} from './hook/useSearch.hook';
import useStyles from './styles';
const Search = () => {
  const styles = useStyles();

  const {
    data,
    handleGridIconPress,
    handleListIconPress,
    isLoading,
    loadMoreComic,
    numCols,
    onContentSizeChange,
    onPressBackIcon,
    onPressSearch,
    onSearchChange,

    setHightView,

    search,
    setFilterArray,
    setLowView,
    sizeContent,
    highRate,
    setHighRate,
    lowRate,
    setLowRate,
  } = useSearch();

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
                setLowRate,
                setHighRate,
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
