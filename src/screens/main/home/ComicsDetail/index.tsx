import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import useStyles from './styles';
import {Episodes, HeaderDetail, Preview} from './Components';
import {NavigationService} from '../../../../navigation';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';

import {
  ComicActions,
  ComicType,
  getCodePostFavorite,
  getUuidPostFavorite,
} from '../../../../redux';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import {RatingActions} from '../../../../redux/reducer/rating.reducer';
import {getChartRating} from '../../../../redux/selectors/rating.selector';
import {Button, Dialog} from '@rneui/base';
import {routes} from '../../../../constants';
import {useComicDetail} from './hook/useComicDetail.hook';
import Awesome from '../../../../components/customs/Awesome';

const ComicsDetail = () => {
  const styles = useStyles();

  const {
    data,
    dataChart,
    handlePressBack,
    onShare,
    postFavorite,
    scrollRef,
    setVisible2,
    visible2,
    uuidPost,
  } = useComicDetail();
  console.log(visible2);

  return (
    <View style={styles.container}>
      <HeaderCustom
        onPressLeftIcon={handlePressBack}
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        rightIconleft={{
          name: 'bookmark',
          color: uuidPost ? '#F89300' : '',
          type: 'ionicon',
        }}
        onPressRightIconLeft={postFavorite}
        onPressRightIconRight={() => setVisible2(!visible2)}
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

      <Awesome
        title="Share comics everywhere"
        show={visible2}
        cancelText="Friends"
        confirmText="Social"
        message="Please select your sharing preferences"
        confirmButtonColor="#00BFFF"
        onConfirmPressed={onShare}
        onCancelPressed={() => NavigationService.navigate(routes.SHARE_USER)}
        cancelButtonColor="#F89300"
        onDismiss={() => setVisible2(false)}
      />
    </View>
  );
};
export default ComicsDetail;
