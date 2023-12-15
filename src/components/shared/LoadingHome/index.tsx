import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {useAppSelector} from '../../../hooks';
import {
  getIsLoadingHome,
  getIsLoadingStart,
} from '../../../redux/selectors/loading.selector';

const LoadingHome = () => {
  const styles = useStyles();
  const loading = useAppSelector(getIsLoadingHome);
  if (!loading) {
    return <View />;
  }

  return <View style={styles.container} />;
};

export default LoadingHome;
