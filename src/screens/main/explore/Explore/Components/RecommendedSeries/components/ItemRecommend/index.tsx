import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {data} from '../../../../../../home/notifications/types';
import {useAppDispatch} from '../../../../../../../../hooks';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import {HeaderCustom} from '../../../../../../../../components';

interface ComicTypeRed {
  data: ComicType;
}

const ItemRecommend: React.FunctionComponent<ComicTypeRed> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const onPressComic = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: props.data});
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPressComic}>
      <ImageBackground
        borderRadius={6}
        source={{
          uri: props.data.image_url,
        }}
        style={styles.container}>
        <View style={styles.overLay} />
        <View style={styles.content}>
          <Text style={styles.topic}>{props.data.topics[0]}</Text>
          <Text numberOfLines={2} style={styles.nameComic}>
            {props.data.comic_name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemRecommend;
