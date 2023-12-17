import React from 'react';
import {TextInput, View} from 'react-native';
import useStyles from './styles';

const FooterCommentPostUserDetail = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Shoot your comment..."
          placeholderTextColor={'#939297'}
        />
      </View>
    </View>
  );
};

export default FooterCommentPostUserDetail;
