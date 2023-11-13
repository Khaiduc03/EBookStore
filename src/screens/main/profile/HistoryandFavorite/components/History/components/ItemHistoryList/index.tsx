import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {useAppDispatch} from '../../../../../../../../hooks';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import FastImage from 'react-native-fast-image';

const ItemHistoryList: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const comic: ComicType = props.data;
  const dispatch = useAppDispatch();

  const onPressNavDetail = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: comic});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressNavDetail}
        style={styles.imgComic}>
        <FastImage
          style={{width: '100%', height: '100%', borderRadius: 6}}
          source={{uri: comic.image_url}}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.nameComic}>{comic.comic_name}</Text>

            <View style={styles.topicsContainer}>
              {props.data.topics.map((text, index) => (
                <View key={index} style={styles.itemTopics}>
                  <Text style={styles.textTopics}>{text}</Text>
                </View>
              ))}
            </View>
          </View>
          <Text style={styles.textContinue}>
            Chapter {comic.last_chapter_number}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(ComicActions.clearListChapterDetail()),
              NavigationService.navigate(routes.CHAPTER, {
                chapter_number: comic.last_chapter_number,
                comic_uuid: comic.comic_uuid,
              });
          }}
          style={styles.continue}>
          <Text style={styles.textBtn}>Contine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemHistoryList;
