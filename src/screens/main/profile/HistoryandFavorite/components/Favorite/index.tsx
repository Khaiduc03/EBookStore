import React from 'react';
import {View} from 'react-native';


import useStyles from './styles';
import { FavoritesList } from './components';

const Favorite: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <FavoritesList />
    </View>
  );
};

export default Favorite;
