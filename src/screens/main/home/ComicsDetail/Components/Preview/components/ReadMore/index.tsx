import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ComicItem} from '../../../../../../../../components';
import {ComicType} from '../../../../../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../../../../../hooks';
import {
  getDetailComic,
  getListComic,
} from '../../../../../../../../redux/selectors/comic.selector';

const ReadMore = () => {
  const styles = useStyles();
  const dataComic = useAppSelector(getListComic);
  const dataComicDetail = useAppSelector(getDetailComic);

  const data = dataComicDetail ? dataComicDetail[0] : null;
  const topic = data?.topics[0];
  console.log(topic);

  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ComicItem data={item} index={index} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        nestedScrollEnabled
        contentContainerStyle={{gap: 5, paddingHorizontal: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataComic}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default ReadMore;
