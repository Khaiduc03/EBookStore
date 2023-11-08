import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {useAppSelector} from '../../../hooks';
import {getIsLoadingStart} from '../../../redux/selectors/loading.selector';

const LoadingStart = () => {
  const styles = useStyles();
  const loading = useAppSelector(getIsLoadingStart);
  if (!loading) {
    return <View />;
  }

  return <View style={styles.container} />;
};

export default LoadingStart;
