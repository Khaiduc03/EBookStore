import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import useStyles from './styles';
import ItemListHot from './Components/ListHotComic/components/ItemListHot';
import ListHotComic from './Components/ListHotComic';

const Explore: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ListHotComic />
    </View>
  );
};

export default Explore;
