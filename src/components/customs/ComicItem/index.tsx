import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import {Comic} from '../../../types';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';
import FastImage from 'react-native-fast-image';
import {ComicType} from '../../../redux';

const ComicItem: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const comic: ComicType = props.data;

  const onpress = () => {
    NavigationService.navigate(routes.COMICDETAIL);
  };

  return (
    <View style={props.viewStyle || styles.container}>
      <TouchableOpacity onPress={() => onpress()}>
        <FastImage
          style={props.imageStyle || styles.imgComic}
          source={{uri: comic.image_url, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>

      <View style={props.contentStyle || styles.content}>
        {!props.topicStyle && (
          <Text style={styles.nameTopic}>{comic.topics[0]}</Text>
        )}
        <Text numberOfLines={2} style={styles.nameComic}>
          {comic.comic_name}
        </Text>
        <View style={styles.rate}>
          <Icon name="star-half" size={18} />
          <Text style={styles.textRate}>{comic.views}</Text>
        </View>
        {props.topicStyle && (
          <View style={props.topicStyle}>
            {comic.topics.map((text, index) => (
              <View key={index} style={styles.itemTopics}>
                <Text style={styles.textTopics}>{text}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default ComicItem;
