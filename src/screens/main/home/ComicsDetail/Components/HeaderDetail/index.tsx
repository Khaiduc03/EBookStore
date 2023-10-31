import {ImageBackground, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {Icon, Divider} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '../../../../../../hooks';
import {getDetailComic} from '../../../../../../redux/selectors/comic.selector';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {ComicActions} from '../../../../../../redux';

const HeaderDetail = () => {
  const dataComicDetail = useAppSelector(getDetailComic);

  const data = dataComicDetail ? dataComicDetail[0] : null;

  const styles = useStyles();

  if (!data) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.container}
      blurRadius={3}
      resizeMode="cover"
      source={{
        uri: data?.image_url,
      }}>
      <View style={styles.content}>
        <FastImage
          style={styles.imageComic}
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: data?.image_url}}
        />
        <View style={styles.contentContainer}>
          <Text numberOfLines={2} style={styles.nameComic}>
            {data?.comic_name}
          </Text>
          <Text style={styles.author}>{data?.author}</Text>
          <Text style={styles.dayCreat}>
            {data?.created_at
              ? data.created_at.toLocaleString()
              : 'No Created Day'}
          </Text>
          <View style={styles.topicsContainer}>
            {data?.topics.map((text, index) => (
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
            <Text style={styles.numberInteract}>4.9</Text>
            <Icon name="star" type="ionicon" size={20} color={'grey'} />
          </View>
          <Text style={styles.titleInteracItem}>6.8k Reviews</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>5.6M+</Text>
          <Text style={styles.titleInteracItem}>Favorite</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>784</Text>
          <Text style={styles.titleInteracItem}>Pages</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>{data?.views}</Text>
          <Text style={styles.titleInteracItem}>Views</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HeaderDetail;
