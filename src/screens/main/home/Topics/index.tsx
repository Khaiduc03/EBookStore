import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import {Skeleton} from '@rneui/themed';

const Topics: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {/* <Skeleton animation="pulse" width={80} height={40} /> */}
      {/* <Skeleton animation="wave" width={200} height={200} /> */}
      {/* <Skeleton animation="none" width={80} height={40} /> */}
    </View>
  );
};

export default Topics;
