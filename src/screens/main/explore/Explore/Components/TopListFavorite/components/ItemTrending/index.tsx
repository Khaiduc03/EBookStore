import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {useAppDispatch} from '../../../../../../../../hooks';
import {Icon} from '@rneui/base';
interface ComicTypeTreding {
  data: ComicType;
  index: number;
}

const ItemTrending: React.FunctionComponent<ComicTypeTreding> = props => {
  const dispatch = useAppDispatch();
  const comic: ComicType = props.data;
  const onPressComic = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: props.data});
  };

  const truncatedValue = comic.total_favorite.toFixed(0);

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onPressComic}>
        <FastImage
          key={comic.uuid}
          style={styles.imgComic}
          source={{uri: comic.image_url, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.nameTopic}>{comic.topics[0]}</Text>
        <Text numberOfLines={2} style={styles.nameComic}>
          {comic.comic_name}
        </Text>
        <View style={styles.rate}>
          <Icon name="heart" type="ionicon" color={'#F89300'} size={15} />
          <Text style={styles.textRate}>{truncatedValue}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemTrending;
