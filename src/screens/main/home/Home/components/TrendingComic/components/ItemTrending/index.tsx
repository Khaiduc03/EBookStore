import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import {ComicType} from '../../../../../../../../redux';
interface ComicTypeTreding {
  data: ComicType;
  index: number;
}

const ItemTrending: React.FunctionComponent<ComicTypeTreding> = props => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate(routes.COMICDETAIL, {data: props.data})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imageComic}
          source={{
            uri: props.data.image_url,
          }}
        />
        <Text style={styles.numberRanking}>{props.index + 1}</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameComic}>
        {props.data.comic_name}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemTrending;
