import React, {FunctionComponent} from 'react';

import {View, Text} from 'react-native';
import useStyles from './styles';
import { Icon } from '@rneui/themed';

const Explore: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Applications</Text>
      <Icon name='book' type='font-awesome'/>
    </View>
  );
};

export default Explore;
