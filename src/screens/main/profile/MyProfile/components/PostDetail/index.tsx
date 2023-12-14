import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {
  GestureEvent,
  GestureHandlerRootView,
  PinchGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderCustom} from '../../../../../../components';
import {routes} from '../../../../../../constants';
import {useAppDispatch} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {backScreen} from '../../../../../../utils';
import {useGetPostDetail} from './hook/useGetPostDetail.hook';
import useStyles from './styles';
import {useModalPostDetail} from './hook/useModalPostDetail.hook';
import {ItemComment} from '../../../../home/CommentComic/components';
import Awesome from '../../../../../../components/customs/Awesome';
interface PostDataDeatilRoute {
  post_uuid: string;
}

const PostDetail = () => {
  const styles = useStyles();

  const route = useRoute();
  const post_uuid = (route.params as PostDataDeatilRoute).post_uuid;

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

  const {width, height} = Dimensions.get('window');

  const screenWidth = Dimensions.get('window').width;

  const [activeIndices, setActiveIndices] = useState({}) as any;

  const scale = new Animated.Value(1);

  const onGestureEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const onHandleState = (event: GestureEvent) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleScroll = (id: any) => (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndices((prevIndices: any) => ({...prevIndices, [id]: index}));
  };

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
                  <View
                    style={[
                      styles.viewRow,
                      styles.viewImageText,
                      styles.marginTopDate,
                    ]}>
                    <Text style={styles.createAt}>
                      {moment(postData && postData.created_at).format(
                        'YYYY-MM-DD [at] HH:mm',
                      )}
                    </Text>
                    <Icon
                      name="public"
                      type="material"
                      size={16}
                      color={'#626162'}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.viewIconPost}>
                <TouchableOpacity onPress={() => setShowAlert(!showAlert)}>
                  <Icon name="close-outline" type="ionicon" size={28} />
                </TouchableOpacity>

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
              renderItem={item => {
                if (item.item === '' || item.item == null) {
                  return <View />;
                }
                return (
                  <View style={styles.imageContainer}>
                    <Pressable onPress={() => onPressOpenModal(item)}>
                      <AutoHeightImage
                        key={item.index.toString()}
                        source={{
                          uri:
                            item.item ||
                            'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
                        }}
                        progressiveRenderingEnabled
                        width={screenWidth}
                      />
                    </Pressable>

                    <Modal
                      visible={showModal}
                      transparent={true}
                      onRequestClose={onPressCloseModal}>
                      <View style={styles.viewIconClose}>
                        <Icon
                          name="close-circle"
                          size={30}
                          color="white"
                          type="ionicon"
                          onPress={onPressCloseModal}
                          style={styles.iconClose}
                        />
                      </View>

                      <View style={styles.viewModalImage}>
                        <GestureHandlerRootView>
                          <PinchGestureHandler
                            onGestureEvent={onGestureEvent}
                            onHandlerStateChange={onHandleState}>
                            <Animated.View style={{transform: [{scale}]}}>
                              <AutoHeightImage
                                key={selectedImage?.index.toString()}
                                source={{uri: selectedImage?.item}}
                                width={screenWidth}
                              />
                            </Animated.View>
                          </PinchGestureHandler>
                        </GestureHandlerRootView>
                      </View>
                    </Modal>
                  </View>
                );
              }}
              pagingEnabled
              onScroll={handleScroll(postData && postData.uuid)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            {postData &&
              postData.images &&
              postData &&
              postData.images.some(image => image !== null) && (
                <View style={styles.viewImagesLengh}>
                  <Text style={styles.textImagesLengh}>
                    {activeIndices[postData && postData.uuid]
                      ? activeIndices[postData && postData.uuid] + 1
                      : 1}
                    /{postData && postData.images.length + 0}
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
                    {postData && postData.comment_count}
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
                onPress={() =>
                  NavigationService.navigate(routes.COMMENT_FORUM)
                }>
                <IconFontAwesome5
                  name="comment"
                  color={styles.colorIconHeartBlur.color}
                  size={20}
                />
                <Text style={styles.textLikeBlur}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconText} onPress={onShare}>
                <Icon name="share-social-outline" type="ionicon" size={22} />
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
