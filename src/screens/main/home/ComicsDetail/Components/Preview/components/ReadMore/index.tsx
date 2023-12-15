import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ComicItem, HeaderCustom} from '../../../../../../../../components';
import {ComicType} from '../../../../../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {
  getDataByTopic,
  getDataByTopicMore,
  getDetailComic,
  getListComic,
} from '../../../../../../../../redux/selectors/comic.selector';
import ItemReadMore from '../ItemReadMore';

const ReadMore = () => {
  const styles = useStyles();
  const dataReadMore = useAppSelector(getDataByTopicMore);

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ItemReadMore data={item} index={index} />
  );
  return (
    <View style={styles.container}>
      <HeaderCustom titleStyle={styles.textTitle} title="Read more" />
      <FlatList
        nestedScrollEnabled
        contentContainerStyle={{gap: 5, paddingHorizontal: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataReadMore}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default ReadMore;
