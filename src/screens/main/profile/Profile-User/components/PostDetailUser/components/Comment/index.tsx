import React from 'react';
import {FlatList, View} from 'react-native';

import useStyles from './styles';
import {
  FooterCommentPostUserDetail,
  HeaderCommentPostUserDetail,
  ItemCommnentPostUserDetail,
} from './components';

const CommentPostUserDetail: React.FC = () => {
  const styles = useStyles();
  const data = Array.from({length: 20}, (_, index) => ({id: index}));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemCommnentPostUserDetail />}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
      />
      <HeaderCommentPostUserDetail />
      <FooterCommentPostUserDetail />
    </View>
  );
};

export default CommentPostUserDetail;
