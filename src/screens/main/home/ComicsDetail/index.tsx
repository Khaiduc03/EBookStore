import React from 'react';
import {View} from 'react-native';
import {HeaderCustom, TabViewItem} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {Episodes, HeaderDetail, Preview} from './Components';
import useStyles from './styles';

import Awesome from '../../../../components/customs/Awesome';
import {routes} from '../../../../constants';
import {useComicDetail} from './hook/useComicDetail.hook';

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
