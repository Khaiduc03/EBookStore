import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {ComicType} from '../../../../../../redux';
import ItemListHot from './components/ItemListHot';
import {useAppSelector} from '../../../../../../hooks';
import {
  getListFavorite,
  getListTopFavorite,
  getListTopRating,
  getListTopView,
} from '../../../../../../redux/selectors/comic.selector';
import {Device} from '../../../../../../utils';
import ItemRatingHot from './components/ItemRatingHot';
import {Icon} from '@rneui/base';
import ItemViewHot from './components/ItemViewHot';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const ListHotComic = () => {
  const styles = useStyles();
  const data = useAppSelector(getListTopView);
  const dataRating = useAppSelector(getListTopRating);
  const dataFavorite = useAppSelector(getListTopFavorite);
  const screenWidth = Device.getDeviceWidth();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const renderSection = ({item, index}: {item: any[]; index: number}) => {
    const sliceItem = item ? item.slice(0, 5) : [];
    return index == 0 ? (
      <View style={styles.ItemContainer}>
        <FlatList
          data={sliceItem}
          keyExtractor={(item, index) => `${item.uuid}_${index}`}
          renderItem={({item, index}) => (
            <ItemListHot data={item} index={index} />
          )}
        />
      </View>
    ) : index == 1 ? (
      <View style={styles.ItemContainer}>
        <FlatList
          data={sliceItem}
          keyExtractor={(item, index) => `${item.uuid}_${index}`}
          renderItem={({item, index}) => (
            <ItemRatingHot data={item} index={index} />
          )}
        />
      </View>
    ) : (
      <View style={styles.ItemContainer}>
        <FlatList
          data={sliceItem}
          keyExtractor={(item, index) => `${item.uuid}_${index}`}
          renderItem={({item, index}) => (
            <ItemViewHot data={item} index={index} />
          )}
        />
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const combinedData: any = [dataFavorite, dataRating, data];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleStyle}>
          {activeIndex == 1
            ? 'Top Rating'
            : activeIndex == 2
            ? 'Top View'
            : activeIndex == 0
            ? 'Top Favorite'
            : ''}
        </Text>
        <Icon
          onPress={() => NavigationService.navigate(routes.TOP_SCREEN)}
          name="arrow-forward-outline"
          type="ionicon"
          color={styles.iconStyle.color}
        />
      </View>
      {combinedData ? (
        <FlatList
          onScroll={handleScroll}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={combinedData}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderSection}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default ListHotComic;
