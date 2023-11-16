import {FlatList, TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import {HeaderComment, ItemComment} from './components';
import useStyles from '../RepComments/styles';
import {Input} from '@rneui/themed';
import {HeaderRepComment} from '../RepComments/components';

const CommentComic = () => {
  const styles = useStyles();
  const data = Array.from({length: 20}, (_, index) => ({id: index}));
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ItemComment />}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
      />
      <TextInput
        placeholder="Shoot your comment..."
        onSubmitEditing={() => console.log('send')}
        returnKeyType="send"
        style={styles.inputStyle}
      />
      <HeaderComment />
    </SafeAreaView>
  );
};

export default CommentComic;
