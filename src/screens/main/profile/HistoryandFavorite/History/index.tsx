import React from 'react';
import {View} from 'react-native';
import {HistoryList} from './components';
import useStyles from './styles';

const HistoryScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HistoryList />
    </View>
  );
};

export default HistoryScreen;
