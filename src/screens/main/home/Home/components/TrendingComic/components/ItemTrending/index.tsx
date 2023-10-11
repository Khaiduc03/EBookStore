import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {ComicTrendingProps} from './type';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';

const ItemTrending: React.FunctionComponent<ComicTrendingProps> = props => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate(routes.COMICDETAIL)}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imageComic}
          source={{
            uri: props.data.image,
          }}
        />
        <Text style={styles.numberRanking}>{props.index + 1}</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameComic}>
        {props.data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemTrending;
