import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
  State,
} from 'react-native-gesture-handler';
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
import {ForumType} from '../../../../../../redux/types/forum.type';
import useStyles from './styles';
import {LogBox} from 'react-native';
import {
  getIsLoadingForum,
  getIsLoadingTopic,
} from '../../../../../../redux/selectors/loading.selector';

const ItemListPost: React.FC<ForumType> = props => {
  const dispatch = useAppDispatch();

  const dataAPI = useAppSelector(getListForum);
  const user = useAppSelector(getAuthUserProfile);
  const currentPage = useAppSelector(getCurrentPageForum);
  const nextPage = useAppSelector(getNextForum);
  const isLoading = useAppSelector(getIsLoadingForum);
  console.log('==========', isLoading);

  const [showModal, setShowModal] = useState(false);
  const [activeIndices, setActiveIndices] = useState({}) as any;
  const [selectedImage, setSelectedImage] = useState(null) as any;

  const {width, height} = Dimensions.get('window');

  const screenWidth = Dimensions.get('window').width;

  // console.log('datahihi: ', dataAPI);

  useEffect(() => {
    dispatch(ForumActions.clearListData());
    dispatch(ForumActions.handleGetListData(1));
  }, []);

  const loadMoreForum = () => {
    if (nextPage && !isLoading) {
      dispatch(
        ForumActions.handleGetListData(currentPage ? currentPage + 1 : 1),
      );
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

  const handleLikePress = (forum_uuid: any) => {
    if (props.is_liked) {
      dispatch(ForumActions.postUnlikeForumPost(forum_uuid));
      dispatch(ForumActions.handleLike_UnlikeSuccess(forum_uuid));
    } else {
      dispatch(ForumActions.postLikeForumPost(forum_uuid));
      dispatch(ForumActions.handleLike_UnlikeSuccess(forum_uuid));
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

  LogBox.ignoreLogs(['ReactImageView: Image source "null" doesn\'t exist']);

  const styles = useStyles();

  const renderItem = ({item}: {item: ForumType}) => (
    <View style={styles.content}>
      <View>
        <View style={styles.post}>
          <View style={[styles.viewRow, styles.viewImageText]}>
            <Image
              style={styles.imageTitle}
              source={{
                uri:
                  item.user_avatar ||
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
          <Text style={styles.textDescription}>{item.content}</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={item.images}
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
              handleLikePress(item.uuid);
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
  );

  return (
    <View>
      <FlatList
        data={dataAPI}
        renderItem={renderItem}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold =
            layoutMeasurement.height / 4;
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
                <Image style={styles.image} source={{uri: user.image_url}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonHeader}
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <Text style={styles.textButtonHeader}>Bạn đang nghĩ gì?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <ImageIcon />
              </TouchableOpacity>
            </View>
          );
        }}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
      />
    </View>
  );
};

export default ItemListPost;
