import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

import {HistoryList} from './components';

const History: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <HistoryList />
    </View>
  );
};

export default History;
