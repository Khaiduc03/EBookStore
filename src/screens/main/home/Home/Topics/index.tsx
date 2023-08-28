import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';

const Topics: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Topic</Text>
    </View>
  );
};

export default Topics;
