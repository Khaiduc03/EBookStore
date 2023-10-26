import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

const FavoriteScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite this here !!!</Text>
    </View>
  );
};

export default FavoriteScreen;
