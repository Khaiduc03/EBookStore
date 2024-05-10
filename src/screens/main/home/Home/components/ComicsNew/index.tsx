import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './style';
import {ComicItem} from '../../../../../../components';
import {ComicType} from '../../../../../../redux';

const ComicsNew = ({numCols, data}: {numCols: number; data: ComicType[]}) => {
  const RenderItem = ({item, index}: {item: ComicType; index: number}) => (
    <ComicItem
      data={item}
      viewStyle={numCols == 1 ? styles.comicItem : null}
      imageStyle={numCols == 1 ? styles.imgComic : null}
      contentStyle={numCols == 1 ? styles.content : null}
      topicStyle={numCols == 1 ? styles.topicsContainer : null}
    />
  );
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={numCols === 3 ? {gap: 5} : null}
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid.toString()}
        showsVerticalScrollIndicator={false}
        key={numCols.toString()}
        numColumns={numCols}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ComicsNew;
