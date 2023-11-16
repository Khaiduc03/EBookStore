import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {Comic} from '../../../../../../types';
import FastImage from 'react-native-fast-image';
import {ComicActions, ComicType} from '../../../../../../redux';
import {useAppDispatch} from '../../../../../../hooks';

const ItemTopViewList: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const onPressDetail = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: comic});
  };
  const comic: ComicType = props.data;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressDetail} style={styles.imgComic}>
        <FastImage
          style={{width: '100%', height: '100%', borderRadius: 6}}
          source={{uri: comic.image_url}}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.nameComic}>{comic.comic_name}</Text>
          <View style={styles.rate}>
            <Icon name="eye-sharp" type="ionicon" color={'#F89300'} size={18} />
            <Text style={styles.textRate}>{comic.views}</Text>
          </View>
          <View style={styles.topicsContainer}>
            {props.data.topics.map((text, index) => (
              <View key={index} style={styles.itemTopics}>
                <Text style={styles.textTopics}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemTopViewList;
