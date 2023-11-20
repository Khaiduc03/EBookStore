import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import Share from 'react-native-share';

import {
  ComicActions,
  ComicType,
  getCodePostFavorite,
  getUuidPostFavorite,
} from '../../../../redux';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

interface RouteParamsIdComic {
  data: ComicType;
  scrollRef: React.RefObject<ScrollView>;
}

const ComicsDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const data = (route.params as RouteParamsIdComic).data;
  const scrollRef = (route.params as RouteParamsIdComic).scrollRef;

  const uuidPost = useAppSelector(getUuidPostFavorite);

  useEffect(() => {
    dispatch(ComicActions.checkFavorite(data.comic_uuid || data.uuid));
    dispatch(ComicActions.getListChapter(data.comic_uuid || data.uuid));
    dispatch(ComicActions.getListByTopicMore({name: data.topics}));
  }, [data]);

  const styles = useStyles();
  const handlePressBack = () => {
    NavigationService.goBack();
  };

  const postFavorite = () => {
    if (uuidPost) {
      dispatch(ComicActions.deleteFavorite(uuidPost));
    } else {
      dispatch(ComicActions.postFavorite(data.comic_uuid || data.uuid));
    }
  };

  const onShare = async () => {
    const options: any = {
      url: data.image_url,
      message:
        'ComicVerse app đọc truyện hàng đầu Việt Nam hihi : \n' +
        data.comic_name +
        '\n',
    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        onPressLeftIcon={handlePressBack}
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        rightIconleft={{
          name: 'bookmark',
          color: uuidPost ? 'red' : '',
          type: 'ionicon',
        }}
        onPressRightIconLeft={postFavorite}
        onPressRightIconRight={onShare}
        rightIconMiddle={{name: 'document-outline', type: 'ionicon'}}
        rightIconRight={{name: 'paper-plane-outline', type: 'ionicon'}}
      />

      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'PREVIEW'}
        title2={'EPISODES'}
        screen1={<Preview data={data} />}
        headerDetail={<HeaderDetail data={data} />}
        screen2={<Episodes />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
        scrollRef={scrollRef}

      />
      
    </View>
  );
};
export default ComicsDetail;
