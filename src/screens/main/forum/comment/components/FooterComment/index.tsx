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
          width: '100%',
          height: 56,
          backgroundColor: '#F1F1F3',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        inputStyle={{
          paddingHorizontal: 9,
          fontSize: 16,
        }}
        // underlineColorAndroid={'black'}
        inputContainerStyle={{borderBottomWidth: 0, paddingVertical: 0}}
        errorStyle={{margin: 0, width: 0, height: 0}}
        placeholder="Shoot your comment..."
        placeholderTextColor={'#939297'}
      />
    </View>
  );
};

export default FooterComment;
