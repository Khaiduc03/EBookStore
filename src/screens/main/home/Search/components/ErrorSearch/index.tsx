import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import LottieView from 'lottie-react-native';
import {JsonImages} from '../../../../../../assets';

const ErrorSearch = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.lottieStyle}
        source={JsonImages.errorSearch}
      />
    </View>
  );
};

export default ErrorSearch;
