import React, {FunctionComponent} from 'react';

import {View, Text} from 'react-native';
import useStyles from './styles';

const Explore: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Applications</Text>
    </View>
  );
};

export default Explore;
