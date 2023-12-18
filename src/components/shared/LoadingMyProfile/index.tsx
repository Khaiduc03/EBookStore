import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {useAppSelector} from '../../../hooks';
import {
  getIsLoadingHome,
  getIsLoadingMyProfile,
  getIsLoadingStart,
} from '../../../redux/selectors/loading.selector';

const LoadingMyProfile = () => {
  const styles = useStyles();
  const loading = useAppSelector(getIsLoadingMyProfile);
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#F89300'} />
    </View>
  );
};

export default LoadingMyProfile;
