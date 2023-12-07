import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {
  FooterCommentPostDetail,
  HeaderCommentPostDetail,
  ItemCommnentPostDetail,
} from './components';

const CommentPostDetail: React.FC = () => {
  const styles = useStyles();
  const data = Array.from({length: 20}, (_, index) => ({id: index}));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemCommnentPostDetail />}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
      />
      <HeaderCommentPostDetail />
      <FooterCommentPostDetail />
    </View>
  );
};

export default CommentPostDetail;
