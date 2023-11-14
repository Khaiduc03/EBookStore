import {
  FlatList,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {FooterComment, HeaderComment, ItemComment} from './components';
import useStyles from './styles';
import {Input} from '@rneui/themed';

const CommentComic = () => {
  const styles = useStyles();
  const data = Array.from({length: 20}, (_, index) => ({id: index}));
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
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
    </KeyboardAvoidingView>
  );
};

export default CommentComic;
