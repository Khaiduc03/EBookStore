import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {routes} from '../../../../../../../constants';
import {useAppDispatch} from '../../../../../../../hooks';
import {NavigationService} from '../../../../../../../navigation';
import {ComicActions, ComicType} from '../../../../../../../redux';
import useStyles from './styles';
import {CustomComicProps} from './type';

const ItemHistoryList: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const comic: ComicType = props.data;
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(ComicActions.clearListChapterDetail()),
            NavigationService.navigate(routes.CHAPTER, {
              chapter_number: comic.last_chapter_number,
              comic_uuid: comic.comic_uuid,
            });
        }}
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
            Continue at chapter {comic.last_chapter_number}
          </Text>
        </View>
        <TouchableOpacity style={styles.ellipsiIcon}>
          <Icon
            name="ellipsis-vertical-sharp"
            type="ionicon"
            size={20}
            color={styles.ellipsiIconStyle.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemHistoryList;
