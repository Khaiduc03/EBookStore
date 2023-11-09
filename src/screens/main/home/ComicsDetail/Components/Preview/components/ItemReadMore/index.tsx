import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';

import FastImage from 'react-native-fast-image';

import {Skeleton} from '@rneui/base';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {NavigationService} from '../../../../../../../../navigation';
import {routes} from '../../../../../../../../constants';
import {useAppDispatch} from '../../../../../../../../hooks';

const ItemReadMore: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const comic: ComicType = props.data;
  const [isLoading, setLoading] = useState(true);
  const scrollRef = useRef<ScrollView | null>(null);

  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };

  const onPressNavDetail = () => {
    dispatch(ComicActions.clearListDataByComic());
    NavigationService.navigate(routes.COMICDETAIL, {
      data: props.data,
      scrollRef: scrollRef,
    });
  };

  return (
    <View style={props.viewStyle || styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onPressNavDetail}>
        <FastImage
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          style={props.imageStyle || styles.imgComic}
          source={{uri: comic.image_url, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.cover}
        />
        {isLoading && (
          <Skeleton animation="wave" style={styles.skeletonStyle}></Skeleton>
        )}
        {isLoading && (
          <ActivityIndicator
            size={'large'}
            style={{
              position: 'absolute',
            }}
          />
        )}
      </TouchableOpacity>

      <View style={props.contentStyle || styles.content}>
        {!props.topicStyle && (
          <Text style={styles.nameTopic}>{comic.topics[0]}</Text>
        )}
        <Text numberOfLines={2} style={styles.nameComic}>
          {comic.comic_name}
        </Text>
        <View style={styles.rate}>
          <Icon name="eye-sharp" type="ionicon" color={'#F89300'} size={18} />
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

export default ItemReadMore;
