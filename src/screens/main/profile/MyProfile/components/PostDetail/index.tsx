import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FBCollage from 'react-native-fb-collage';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  ScrollView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderCustom} from '../../../../../../components';
import Awesome from '../../../../../../components/customs/Awesome';
import {routes} from '../../../../../../constants';
import {useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {getAuthUserProfile} from '../../../../../../redux';
import {backScreen} from '../../../../../../utils';
import {useGetPostDetail} from './hook/useGetPostDetail.hook';
import {useModalPostDetail} from './hook/useModalPostDetail.hook';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
interface PostDataDeatilRoute {
  post_uuid: string;
}

const PostDetail = () => {
  const styles = useStyles();

  const route = useRoute();
  const post_uuid = (route.params as PostDataDeatilRoute).post_uuid;
  const user = useAppSelector(getAuthUserProfile);

  const {
    postData,
    onPressLike,
    count,
    like,
    handleDeletePost,
    showAlert,
    setShowAlert,
  } = useGetPostDetail({
    post_id: post_uuid,
    forum_uuid: post_uuid,
  });

  const {onPressCloseModal, onPressOpenModal, selectedImage, showModal} =
    useModalPostDetail();

  const handlePressGoback = () => {
    backScreen();
  };

  console.log(postData);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const onShare = async () => {
    const options: any = {
      url: 'https://ComicVerse.com',
      message: 'ComicVerse app đọc truyện tích hợp mạng xã hội ^__^ ! : \n',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeElapsed = () => {
    const now = moment();
    const postTime = moment(postData?.created_at);
    const duration = moment.duration(now.diff(postTime));

    if (duration.asMinutes() < 1) {
      return 'Just now';
    } else if (duration.asHours() < 1) {
      return `${Math.floor(duration.asMinutes())}m ago`;
    } else if (duration.asDays() < 1) {
      return `${Math.floor(duration.asHours())}h ago`;
    } else {
      return `${Math.floor(duration.asDays())}d ago`;
    }
  };

  const scale = useSharedValue(1);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event: any) => {
      scale.value = event.scale < 1 ? 1 : event.scale;
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    },
    onEnd: () => {
      scale.value = withSpring(scale.value);
    },
  });

  const tapHandler = useAnimatedGestureHandler({
    onActive: (event: any) => {
      console.log('Double tap detected!');
      scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyleHeader}
        onPressLeftIcon={handlePressGoback}
        leftIcon={{
          name: 'arrow-back-sharp',
          type: 'ionicon',
          color: styles.leftIconStyle.color,
        }}
        title="Post Detail"
      />
      {postData ? (
        <View style={styles.content}>
          <View>
            <View style={styles.post}>
              <View style={[styles.viewRow, styles.viewImageText]}>
                <Image
                  style={styles.imageTitle}
                  source={{
                    uri:
                      (postData && postData && postData.user_avatar) ||
                      'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
                  }}
                />
                <View style={styles.viewTextPost}>
                  <Text style={styles.name}>
                    {(postData && postData.user_fullname) || 'Anonymus'}
                  </Text>
                  <View style={[styles.viewRow, styles.viewCreateAt]}>
                    <Text style={styles.createAt}>{getTimeElapsed()} •</Text>
                    <Icon
                      name="public"
                      type="material"
                      size={14}
                      color={'#b3b3b3'}
                    />
                  </View>
                </View>
              </View>

              <View>
                {user.uuid == postData.user_uuid ? (
                  <TouchableOpacity onPress={() => setShowAlert(!showAlert)}>
                    <Icon
                      name="close-outline"
                      type="ionicon"
                      size={24}
                      color={'#626162'}
                    />
                  </TouchableOpacity>
                ) : (
                  <View />
                )}

                <Awesome
                  show={showAlert}
                  cancelText="No, cancel"
                  cancelButtonColor="blue"
                  confirmText="Yes, delete it"
                  confirmButtonColor="red"
                  title="Delete Your Post 😕"
                  message="Are you sure you want to delete your post?"
                  onCancelPressed={() => {
                    setShowAlert(false);
                  }}
                  onConfirmPressed={() => {
                    handleDeletePost(postData?.uuid);
                  }}
                />
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.textDescription}>
                {postData && postData.content}
              </Text>
            </View>
          </View>

          <View>
            <FlatList
              data={postData && postData.images}
              renderItem={({item, index}) => {
                return (
                  <View>
                    {item && (
                      <>
                        <FBCollage
                          key={0}
                          images={[{uri: item}] as any}
                          style={{
                            flex: 1,
                            width: screenWidth,
                            height: screenHeight / 2,
                          }}
                          borderRadius={6}
                          imageOnPress={() => onPressOpenModal(item)}
                        />
                      </>
                    )}

                    <Modal
                      visible={showModal}
                      transparent={true}
                      onRequestClose={onPressCloseModal}>
                      <View style={styles.viewModalImage}>
                        <GestureHandlerRootView>
                          <PinchGestureHandler onGestureEvent={pinchHandler}>
                            <Animated.View style={animatedStyle}>
                              <TapGestureHandler
                                numberOfTaps={2}
                                onGestureEvent={tapHandler}>
                                <Animated.View>
                                  <FastImage
                                    source={{
                                      uri: selectedImage,
                                      priority: FastImage.priority.normal,
                                    }}
                                    style={{
                                      width: screenWidth,
                                      height: screenHeight,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                  />
                                </Animated.View>
                              </TapGestureHandler>
                            </Animated.View>
                          </PinchGestureHandler>
                        </GestureHandlerRootView>
                      </View>
                    </Modal>
                  </View>
                );
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={ev => {
                const newIndex = Math.floor(
                  ev.nativeEvent.contentOffset.x / screenWidth,
                );
                setCurrentIndex(newIndex);
              }}
            />
            {postData.images && (
              <View style={styles.viewImagesLength}>
                <Text style={styles.textImagesLength}>
                  {postData.images ? currentIndex + 1 : 0}/
                  {postData.images.length}
                </Text>
              </View>
            )}
          </View>

          <View style={{flex: 1}}>
            <View style={styles.viewLikeComment}>
              <View style={styles.viewNumberCount}>
                <View style={styles.iconText}>
                  <View style={[styles.iconLike, styles.viewCenter]}>
                    <IconMaterialIcons
                      name={'thumb-up-alt'}
                      color={'white'}
                      size={11}
                    />
                  </View>
                  <Text style={styles.textLikeBlur}>{count}</Text>
                </View>
                <View style={styles.iconText}>
                  <Text style={styles.textLikeBlur}>
                    {postData.comment_count}
                  </Text>
                  <Text style={styles.textLikeBlur}>comment</Text>
                </View>
              </View>
            </View>

            <View style={styles.footerPost}>
              <TouchableOpacity style={styles.iconText} onPress={onPressLike}>
                <IconMaterialIcons
                  name={like ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                  color={
                    like
                      ? styles.colorIconHeartFocus.color
                      : styles.colorIconHeartBlur.color
                  }
                  size={24}
                />
                <Text style={like ? styles.textLikeFocus : styles.textLikeBlur}>
                  Like
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconText}
                onPress={() => {
                  NavigationService.navigate(routes.COMMENT_FORUM, {
                    uuid: postData.uuid,
                    comment_count: postData.comment_count,
                  });
                }}>
                <IconFontAwesome5
                  name="comment"
                  color={styles.colorIconHeartBlur.color}
                  size={20}
                />
                <Text style={styles.textLikeBlur}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconText} onPress={onShare}>
                <Icon name="arrow-redo-outline" type="ionicon" size={22} />
                <Text style={styles.textLikeBlur}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

export default PostDetail;
