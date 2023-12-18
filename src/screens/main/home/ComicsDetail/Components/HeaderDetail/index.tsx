import {ImageBackground, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {Icon, Divider} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../../../../../../hooks';
import {getDetailComic} from '../../../../../../redux/selectors/comic.selector';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {ComicActions, ComicType} from '../../../../../../redux';
import moment from 'moment';
import {getChartRating} from '../../../../../../redux/selectors/rating.selector';
interface Comic {
  data: ComicType;
}

const HeaderDetail: React.FC<Comic> = props => {
  const styles = useStyles();

  const {
    author,
    average_rating,
    comic_name,
    comic_uuid,
    created_at,
    description,
    favorite,
    favorite_uuid,
    image_url,
    last_chapter_number,
    topic_names,
    rating,
    isfavorite,
    page,
    topics,
    total_favorite,
    uuid,
    views,
  } = props.data;

  const dataChart = useAppSelector(getChartRating);

  return (
    <ImageBackground
      style={styles.container}
      blurRadius={3}
      resizeMode="cover"
      source={{
        uri: image_url,
      }}>
      <View style={styles.overLay} />
      <View style={styles.content}>
        <FastImage
          style={styles.imageComic}
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: image_url}}
        />
        <View style={styles.contentContainer}>
          <Text numberOfLines={2} style={styles.nameComic}>
            {comic_name}
          </Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.dayCreat}>
            {props.data.created_at
              ? moment(props.data.created_at).format('YYYY-MM-DD-HH:mm') + ''
              : '2023-12-22'}
          </Text>
          <View style={styles.topicsContainer}>
            {topics.map((text, index) => (
              <View key={index} style={styles.itemTopics}>
                <Text style={styles.textTopics}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.interactContainer}>
        <View style={styles.interactItem}>
          <View style={styles.rate}>
            <Text style={styles.numberInteract}>
              {rating ? rating.toFixed(1) : 0 || 0}
            </Text>
            <Icon name="star" type="ionicon" size={20} color={'grey'} />
          </View>
          <Text style={styles.titleInteracItem}>
            {dataChart?.total_rating ? dataChart.total_rating : 0 || 0} reviews
            Reviews
          </Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>{favorite}</Text>
          <Text style={styles.titleInteracItem}>Favorite</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>{page}</Text>
          <Text style={styles.titleInteracItem}>Pages</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>{views}</Text>
          <Text style={styles.titleInteracItem}>Views</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HeaderDetail;
