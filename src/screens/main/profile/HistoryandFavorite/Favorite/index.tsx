import React from 'react';
import {View, Text} from 'react-native';
import useStyles from './styles';

const FavoriteSreen: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>Hihi</Text>
    </View>
  );
};

export default FavoriteSreen;
