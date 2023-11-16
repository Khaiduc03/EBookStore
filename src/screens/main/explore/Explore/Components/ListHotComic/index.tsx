import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {ComicType} from '../../../../../../redux';
import ItemListHot from './components/ItemListHot';
import {useAppSelector} from '../../../../../../hooks';
import {getListTopView} from '../../../../../../redux/selectors/comic.selector';
import {Device} from '../../../../../../utils';

const ListHotComic = () => {
  const styles = useStyles();

  const data = useAppSelector(getListTopView);
  const screenWidth = Device.getDeviceWidth();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const renderSection = ({item, index}: {item: any[]; index: number}) => {
    const sliceItem = item.slice(0, 5);
    return (
      <View style={styles.ItemContainer}>
        <FlatList
          data={sliceItem}
          keyExtractor={(item, index) => `${item.uuid}_${index}`}
          renderItem={({item, index}) => (
            <ItemListHot data={item} index={index} />
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

  const combinedData: any = [data, data, data];
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        {activeIndex == 1
          ? 'Action'
          : activeIndex == 2
          ? 'Honor'
          : 'Weekly HOT'}
      </Text>
      <FlatList
        onScroll={handleScroll}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={combinedData}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderSection}
      />
    </View>
  );
};

export default ListHotComic;
