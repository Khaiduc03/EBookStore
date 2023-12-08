import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  LogBox,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import ReAnimated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageIcon} from '../../../../../../assets/svg';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {ForumActions, getAuthUserProfile} from '../../../../../../redux';
import {
  getCurrentPageForum,
  getListForum,
  getNextForum,
} from '../../../../../../redux/selectors/forum.selector';
import {getIsLoadingForum} from '../../../../../../redux/selectors/loading.selector';
import {ForumType} from '../../../../../../redux/types/forum.type';
import useStyles from './styles';
import {RefreshControl} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

interface ForumDataProps {
  data?: ForumType;
  isLoading?: boolean;
  loadMoreForum?: () => void;
}

const ItemListPost: React.FC<ForumDataProps> = props => {
  const dispatch = useAppDispatch();

  const dataAPI = useAppSelector(getListForum);
  const user = useAppSelector(getAuthUserProfile);
  const currentPage = useAppSelector(getCurrentPageForum);
  const nextPage = useAppSelector(getNextForum);
  const isLoading = useAppSelector(getIsLoadingForum);
  // console.log('==========', isLoading);

  const [showModal, setShowModal] = useState(false);
  const [activeIndices, setActiveIndices] = useState({}) as any;
  const [selectedImage, setSelectedImage] = useState(null) as any;

  const {width, height} = Dimensions.get('window');

  const screenWidth = Dimensions.get('window').width;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(ForumActions.clearListData());
    try {
      await dispatch(ForumActions.getListData(1));
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(ForumActions.clearListData());
    dispatch(ForumActions.getListData(1));
  }, []);

  const loadMoreForum = () => {
    if (nextPage && !isLoading) {
      dispatch(ForumActions.getListData(currentPage ? currentPage + 1 : 1));
      console.log('nextPage', nextPage);
    }
  };

  const openModal = (image: any) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
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

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        color={'#F89300'}
        size={'large'}
        style={{marginBottom: 22}}
      />
    );
  }, []);

  const handleDeletePost = (forum_uuid: any) => {
    dispatch(ForumActions.deletePost({forum_uuid: forum_uuid}));
  };

  const scale = useSharedValue(1);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = event.scale < 1 ? 1 : event.scale;
      translationX.value = withSpring(0);
      translationY.value = withSpring(0);
    },
    onEnd: () => {
      scale.value = withSpring(scale.value);
    },
  });

  const tapHandler = useAnimatedGestureHandler({
    onActive: event => {
      scale.value = withSpring(1);
    },
  });

  const [showAlert, setShowAlert] = useState(false);

  const styles = useStyles();

  const renderItem = ({item}: {item: ForumType}) => {
    const currentItem = dataAPI.find((forum: any) => forum.uuid === item.uuid);

    if (!currentItem) {
      return null;
    }

    const handleLike_UnlikePress = async (forum_uuid: any) => {
      try {
        if (currentItem.is_liked) {
          await dispatch(ForumActions.deleteLikeForum(forum_uuid));
        } else {
          await dispatch(ForumActions.postLikeForum(forum_uuid));
        }
      } catch (error) {
        console.error('Error during like/unlike:', error);
      } finally {
      }
    };

    return (
      <View style={styles.content}>
        <View>
          <View style={styles.post}>
            <View style={[styles.viewRow, styles.viewImageText]}>
              <Image
                style={styles.imageTitle}
                source={{
                  uri:
                    item.user_avatar?.toString() ||
                    'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
                }}
              />
              <View style={styles.viewTextPost}>
                <Text style={styles.name}>
                  {item.user_fullname || 'Anonymus'}
                </Text>
                <View
                  style={[
                    styles.viewRow,
                    styles.viewImageText,
                    styles.marginTopDate,
                  ]}>
                  <Text style={styles.createAt}>
                    {moment(item.created_at).format('YYYY-MM-DD [at] HH:mm')}
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

            {user.uuid === item.user_uuid && (
              <View style={styles.viewIconPost}>
                <TouchableOpacity
                  onPress={() => {
                    setShowAlert(!showAlert);
                  }}>
                  <Icon name="close-outline" type="ionicon" size={24} />
                  <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Delete Your Post 😕"
                    message="Are you sure you want to delete your post?"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    cancelButtonColor="blue"
                    confirmText="Yes, delete it"
                    confirmButtonColor="red"
                    onCancelPressed={() => {
                      setShowAlert(false);
                    }}
                    onConfirmPressed={() => {
                      setShowAlert(false);
                      handleDeletePost(item.uuid);
                    }}
                    titleStyle={styles.textTitleAlert}
                    messageStyle={styles.textMessageAlert}
                    cancelButtonTextStyle={styles.textCancelAlert}
                    confirmButtonTextStyle={styles.textConfirmAlert}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.description}>
            <Text style={styles.textDescription}>{item.content}</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={item.images}
            renderItem={item => {
              return (
                <View style={styles.imageContainer}>
                  <Pressable onPress={() => openModal(item)}>
                    {item.item && (
                      <AutoHeightImage
                        key={item.index.toString()}
                        source={{
                          uri: item.item,
                        }}
                        width={screenWidth}
                      />
                    )}
                  </Pressable>

                  <Modal
                    visible={showModal}
                    transparent={true}
                    onRequestClose={closeModal}>
                    <TouchableOpacity
                      style={styles.viewIconClose}
                      onPress={closeModal}>
                      <Icon
                        name="close-circle"
                        size={30}
                        color={styles.colorIconClose.color}
                        type="ionicon"
                        style={styles.iconClose}
                      />
                    </TouchableOpacity>

                    <View style={styles.viewModalImage}>
                      <GestureHandlerRootView>
                        <PinchGestureHandler onGestureEvent={pinchHandler}>
                          <ReAnimated.View
                            style={{transform: [{scale: scale}]}}>
                            <TapGestureHandler
                              numberOfTaps={2}
                              onGestureEvent={tapHandler}>
                              <ReAnimated.View>
                                <AutoHeightImage
                                  key={selectedImage?.index.toString()}
                                  source={{
                                    uri: selectedImage?.item,
                                  }}
                                  width={screenWidth}
                                />
                              </ReAnimated.View>
                            </TapGestureHandler>
                          </ReAnimated.View>
                        </PinchGestureHandler>
                      </GestureHandlerRootView>
                    </View>
                  </Modal>
                </View>
              );
            }}
            pagingEnabled
            onScroll={handleScroll(item.uuid)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {item.images && item.images.some(image => image !== null) && (
            <View style={styles.viewImagesLengh}>
              <Text style={styles.textImagesLengh}>
                {activeIndices[item.uuid] ? activeIndices[item.uuid] + 1 : 1}/
                {item.images.length + 0}
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
                <Text style={styles.textLikeBlur}>{item.like_count}</Text>
              </View>
              <View style={styles.iconText}>
                <Text style={styles.textLikeBlur}>{item.comment_count}</Text>
                <Text style={styles.textLikeBlur}>comment</Text>
              </View>
            </View>
          </View>

          <View style={styles.footerPost}>
            <TouchableOpacity
              style={styles.iconText}
              onPress={() => {
                handleLike_UnlikePress(item.uuid);
              }}>
              <IconMaterialIcons
                name={item.is_liked ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                color={
                  item.is_liked
                    ? styles.colorIconHeartFocus.color
                    : styles.colorIconHeartBlur.color
                }
                size={24}
              />
              <Text
                style={
                  item.is_liked ? styles.textLikeFocus : styles.textLikeBlur
                }>
                Like
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconText}
              onPress={() => {
                NavigationService.navigate(routes.COMMENT_FORUM, {
                  uuid: item.uuid,
                  comment_count: item.comment_count,
                });
                console.log(
                  'uuid: ',
                  item.uuid,
                  '\ncomment_count: ',
                  item.comment_count,
                );
              }}>
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
    );
  };

  return (
    <View>
      <FlatList
        data={dataAPI}
        renderItem={renderItem}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            contentSize.height - numberOfPixelsFromBottomThreshold;

          if (isNearBottom && !isLoading) {
            loadMoreForum();
          }
        }}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
                {user.image_url && (
                  <Image
                    style={styles.image}
                    source={{uri: user.image_url.toString()}}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonHeader}
                onPress={() => NavigationService.navigate(routes.CREATE_POST)}>
                <Text style={styles.textButtonHeader}>Bạn đang nghĩ gì?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.CREATE_POST)}>
                <ImageIcon />
              </TouchableOpacity>
            </View>
          );
        }}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F89300']}
          />
        }
      />
    </View>
  );
};

export default ItemListPost;
