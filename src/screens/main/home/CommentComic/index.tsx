import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FooterComment, HeaderComment, ItemComment} from './components';
import useStyles from './styles';

const CommentComic = () => {
  const styles = useStyles();
  const data = Array.from({length: 20}, (_, index) => ({id: index}));
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemComment />}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
      />
      <HeaderComment />
      <FooterComment />
    </View>
  );
};

export default CommentComic;
