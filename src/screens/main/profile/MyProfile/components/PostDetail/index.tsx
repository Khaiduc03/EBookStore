import {Icon} from '@rneui/themed';
import moment from 'moment';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {images} from '../../../../../../assets';
import {HeaderCustom} from '../../../../../../components';
import TextCustom from '../../../../../../components/customs/Text';
import {routes} from '../../../../../../constants';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationService} from '../../../../../../navigation';
import Icon_Comment from '../Icon-Comment';
import useStyles from './styles';
import Share from 'react-native-share';
import React, {useCallback, useEffect, useState} from 'react';
import {
  GestureEvent,
  GestureHandlerRootView,
  PinchGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';
import {ForumType} from '../../../../../../redux/types/forum.type';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {ForumActions} from '../../../../../../redux';
import {data} from '../../../../home/RatingComicScreen/components/ItemListButton/types';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';
import {getPostById} from '../../../../../../redux/selectors/user.selector';
interface PostDataDeatilRoute {
  post_uuid: string;
}

const PostDetail = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const route = useRoute();
  const post_uuid = (route.params as PostDataDeatilRoute).post_uuid;

  const dataDetail = useAppSelector(getPostById);

  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
  };

  useEffect(() => {
    dispatch(UserAction.getPostById(post_uuid));
  }, [post_uuid]);

  const {width, height} = Dimensions.get('window');

  const screenWidth = Dimensions.get('window').width;
  const [showModal, setShowModal] = useState(false);
  const [activeIndices, setActiveIndices] = useState({}) as any;
  const [selectedImage, setSelectedImage] = useState(null) as any;

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

  const openModal = (image: any) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
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

  const handleLikePress = (forum_uuid: any) => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
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
        <View>
          <View style={styles.post}>
            <View style={[styles.viewRow, styles.viewImageText]}>
              <Image
                style={styles.imageTitle}
                source={{
                  uri:
                    (dataDetail && dataDetail && dataDetail.user_avatar) ||
                    'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
                }}
              />
              <View style={styles.viewTextPost}>
                <Text style={styles.name}>
                  {(dataDetail && dataDetail.user_fullname) || 'Anonymus'}
                </Text>
                <View
                  style={[
                    styles.viewRow,
                    styles.viewImageText,
                    styles.marginTopDate,
                  ]}>
                  <Text style={styles.createAt}>
                    {moment(dataDetail && dataDetail.created_at).format(
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
              <Icon name="ellipsis-horizontal" type="ionicon" size={28} />
              <TouchableOpacity
                onPress={() => {
                  // handleDeletePost(item.uuid);
                }}>
                <Icon name="close-outline" type="ionicon" size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.textDescription}>
              {dataDetail && dataDetail.content}
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            data={dataDetail && dataDetail.images}
            renderItem={item => {
              if (item.item === '' || item.item == null) {
                return <View />;
              }
              return (
                <View style={styles.imageContainer}>
                  <Pressable onPress={() => openModal(item)}>
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
                    onRequestClose={closeModal}>
                    <View style={styles.viewIconClose}>
                      <Icon
                        name="close-circle"
                        size={30}
                        color="white"
                        type="ionicon"
                        onPress={closeModal}
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
            onScroll={handleScroll(dataDetail && dataDetail.uuid)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {dataDetail &&
            dataDetail.images &&
            dataDetail &&
            dataDetail.images.some(image => image !== null) && (
              <View style={styles.viewImagesLengh}>
                <Text style={styles.textImagesLengh}>
                  {activeIndices[dataDetail && dataDetail.uuid]
                    ? activeIndices[dataDetail && dataDetail.uuid] + 1
                    : 1}
                  /{dataDetail && dataDetail.images.length + 0}
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
                <Text style={styles.textLikeBlur}>
                  {dataDetail && dataDetail.like_count}
                </Text>
              </View>
              <View style={styles.iconText}>
                <Text style={styles.textLikeBlur}>
                  {dataDetail && dataDetail.comment_count}
                </Text>
                <Text style={styles.textLikeBlur}>comment</Text>
              </View>
            </View>
          </View>

          <View style={styles.footerPost}>
            <TouchableOpacity
              style={styles.iconText}
              onPress={() => {
                handleLikePress(dataDetail && dataDetail.uuid);
              }}>
              <IconMaterialIcons
                name={
                  dataDetail && dataDetail.is_liked
                    ? 'thumb-up-alt'
                    : 'thumb-up-off-alt'
                }
                color={
                  dataDetail && dataDetail.is_liked
                    ? styles.colorIconHeartFocus.color
                    : styles.colorIconHeartBlur.color
                }
                size={24}
              />
              <Text
                style={
                  dataDetail && dataDetail.is_liked
                    ? styles.textLikeFocus
                    : styles.textLikeBlur
                }>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconText}
              onPress={() => NavigationService.navigate(routes.COMMENT_POST)}>
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
    </ScrollView>
  );
};

export default PostDetail;
