import React from 'react';
import {TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useStyles from './styles';

const FooterCommentPostUserDetail = () => {
  const styles = useStyles();
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Shoot your comment..."
          placeholderTextColor={'#939297'}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default FooterCommentPostUserDetail;
