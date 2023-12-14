import dynamicLinks from '@react-native-firebase/dynamic-links';
import React from 'react';
import {View} from 'react-native';
import Share from 'react-native-share';
import {HeaderCustom, TabViewItem} from '../../../../components';
import Awesome from '../../../../components/customs/Awesome';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import {Episodes, HeaderDetail, Preview} from './Components';
import {useComicDetail} from './hook/useComicDetail.hook';
import useStyles from './styles';
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

  const generateLink = async () => {
    try {
      const link = await dynamicLinks().buildShortLink(
        {
          link: `https://comicverse2.page.link/V9Hh/comicdetail?comic_uuid=${data?.uuid}`,
          domainUriPrefix: 'https://comicverse2.page.link',
          android: {
            packageName: 'com.comicverse',
          },
          analytics: {
            campaign: 'comicdetail',
          },
          navigation: {
            // Lấy đường dẫn của màn hình chi tiết truyện tranh
            forcedRedirectEnabled: true,
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      console.log('LINK', link);
      return link;
    } catch (error) {
      console.log(error);
    }
  };



  // const onShare = async () => {
  //   const getLink = await generateLink();
  //   // const initialUrl = await Linking.getInitialURL();
  //   // console.log(initialUrl);
  //   // const {url: initialUrl, processing} = useInitialURL();
  //   const options: any = {
  //     url: getLink,
  //   };

  //   try {
  //     const res = await Share.open(options);
  //     setVisible2(false);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
