import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Input} from '@rneui/base';

const FooterComment = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Input
        containerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderColor: '#E4E4E4',
        }}
        inputStyle={{
          backgroundColor: '#F1F1F3',
          paddingVertical: 0,
          fontSize: 14,
          borderRadius: 10,
        }}
        inputContainerStyle={{borderBottomWidth: 0, paddingVertical: 0}}
        errorStyle={{margin: 0, width: 0, height: 0}}
        placeholder="Shoot your comment..."
        placeholderTextColor={'#939297'}
      />
    </View>
  );
};

export default FooterComment;
