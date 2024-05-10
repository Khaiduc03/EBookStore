import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Image} from '@rneui/themed';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {Icon} from '@rneui/base';
import {GoogleIcon} from '../../../../../../../../assets/icons';
import {TopOneImage} from '../../../../../../../../assets/svg';
import {useAppDispatch} from '../../../../../../../../hooks';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';

interface ItemListHotProps {
  data: ComicType;
  index: number;
}

const ItemRatingHot: React.FC<ItemListHotProps> = props => {
  const styles = useStyles();
  const comic: ComicType = props.data;
  const dispatch = useAppDispatch();
  const onPressComic = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: comic});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressComic}
      style={styles.container}>
      {props.index == 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TopOneImage />
          <Text style={styles.textNumberOne}>1</Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.textNumber}>
            {props.index + 1}
          </Text>
        </View>
      )}
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: comic.image_url,
          }}
        />

        <View style={styles.content}>
          <Text style={styles.nameComic}>{comic.comic_name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" type="fontawesome" size={13} color={'#F89300'} />
            <Text style={styles.topic}>{comic.rating.toFixed(2) || 0}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRatingHot;
