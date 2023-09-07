import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import {Search} from '../../../../components';

const Topics: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

export default Topics;
