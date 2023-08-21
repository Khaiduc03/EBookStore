import React, {FunctionComponent, useState} from 'react';

import {View} from 'react-native';

import styles from './styles';
import {Text} from '@rneui/base';

const Bookmark: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark</Text>
    </View>
  );
};

export default Bookmark;
