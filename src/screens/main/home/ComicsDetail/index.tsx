import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions} from '../../../../redux';

interface RouteParamsIdComic {
  uuid: string;
}

const ComicsDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const uuidComic = (route.params as RouteParamsIdComic).uuid;

  useEffect(() => {
    dispatch(ComicActions.getDetailComic(uuidComic));
    dispatch(ComicActions.getListChapter(uuidComic));
  }, [uuidComic]);

  const styles = useStyles();
  const handlePressBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        onPressLeftIcon={handlePressBack}
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        rightIconleft={{name: 'bookmark-outline', type: 'ionicon'}}
        rightIconMiddle={{name: 'document-outline', type: 'ionicon'}}
        rightIconRight={{name: 'paper-plane-outline', type: 'ionicon'}}
      />

      <TabViewItem
        tabStyle={styles.tabStyle}
        title1={'PREVIEW'}
        title2={'EPISODES'}
        screen1={<Preview />}
        screen2={<Episodes />}
        viewStyle={{height: 800}}
        headerDetail={<HeaderDetail />}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};
export default ComicsDetail;
