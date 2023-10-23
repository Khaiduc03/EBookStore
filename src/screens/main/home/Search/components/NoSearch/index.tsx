import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';

const NoSearch = () => {
  const styles = useStyles();
  return <View style={styles.container}></View>;
};

export default NoSearch;
