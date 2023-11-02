import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, ComicType} from '../../../../redux';

interface RouteParamsIdComic {
  data: ComicType;
}

const ComicsDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const data = (route.params as RouteParamsIdComic).data;

  useEffect(() => {
    dispatch(ComicActions.getListChapter(data.uuid));
  }, []);

  const styles = useStyles();
  const handlePressBack = () => {
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataDetail());
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
        screen1={<Preview data={data} />}
        headerDetail={<HeaderDetail data={data} />}
        screen2={<Episodes />}
        viewStyle={{height: 800}}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};
export default ComicsDetail;
