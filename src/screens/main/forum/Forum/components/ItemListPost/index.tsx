import {Icon} from '@rneui/themed';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  GestureEvent,
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageIcon} from '../../../../../../assets/svg';
import {routes} from '../../../../../../constants';
import {useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {getAuthUserProfile} from '../../../../../../redux';
import {DataForum, ForumData} from '../../types';
import useStyles from './styles';

const ItemListPost: React.FC = () => {
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

  const [dataForum, setDataForum] = useState(DataForum);

  const {width} = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState('');
  const [activeIndices, setActiveIndices] = useState({}) as any;
  const flatListRef = useRef<FlatList | null>(null);

  const openModal = (item: any) => {
    setShowModal(true);
    setShowImageModal(item);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleScroll = (id: any) => (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndices((prevIndices: any) => ({...prevIndices, [id]: index}));
  };

  const [isLike, setIsLike] = useState(false);
  const user = useAppSelector(getAuthUserProfile);
  const flatListRefMain = useRef<FlatList | null>(null);

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

  const handleLikePress = (uuid: string) => {
    // Tìm index của item trong dataForum
    const index = dataForum.findIndex((item: any) => item.uuid === uuid);

    // Kiểm tra nếu không tìm thấy item
    if (index === -1) return;

    // Tạo một bản sao của dataForum
    const newDataForum = [...dataForum];

    // Cập nhật like_count và is_liked dựa trên trạng thái hiện tại của is_liked
    newDataForum[index].like_count = newDataForum[index].is_liked
      ? newDataForum[index].like_count - 1
      : newDataForum[index].like_count + 1;
    newDataForum[index].is_liked = !newDataForum[index].is_liked;

    // Cập nhật state
    setDataForum(newDataForum);
  };

  const styles = useStyles();

  const renderItem = ({item}: {item: ForumData}) => (
    <View style={styles.content}>
      <View style={styles.post}>
        <View style={[styles.viewRow, styles.viewImageText]}>
          <Image
            style={styles.imageTitle}
            source={{
              uri: item.user_avatar || undefined,
            }}
          />
          <View style={styles.viewTextPost}>
            <Text style={styles.name}>{item.user_fullname}</Text>
            <View
              style={[
                styles.viewRow,
                styles.viewImageText,
                styles.marginTopDate,
              ]}>
              <Text style={styles.createAt}>{item.created_at}</Text>
              <Icon name="public" type="material" size={16} color={'#626162'} />
            </View>
          </View>
        </View>

        <View style={styles.viewIconPost}>
          <Icon name="ellipsis-horizontal" type="ionicon" size={28} />
          <Icon
            name="close-outline"
            type="ionicon"
            size={28}
            onPress={() => {
              item.deleted_at;
            }}
          />
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{item.content}</Text>
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          key={item.uuid}
          data={item.images}
          renderItem={({item, index}) => (
            <View>
              <Pressable onPress={() => openModal(item)}>
                <Reanimated.Image
                  source={{uri: item}}
                  style={[{width: width, height: 200}]}
                  resizeMode="contain"
                />
              </Pressable>

              <Modal
                visible={showModal}
                transparent={true}
                accessibilityIgnoresInvertColors
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
                      <Animated.Image
                        source={{uri: showImageModal}}
                        style={[
                          {width: width, height: 200, transform: [{scale}]},
                        ]}
                        resizeMode="contain"
                      />
                    </PinchGestureHandler>
                  </GestureHandlerRootView>
                </View>
              </Modal>
            </View>
          )}
          horizontal
          pagingEnabled
          onScroll={handleScroll(item.uuid.toString())}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.viewImagesLengh}>
          <Text style={styles.textImagesLengh}>
            {activeIndices[item.uuid] ? activeIndices[item.uuid] + 1 : 1}/
            {item.images.length}
          </Text>
        </View>

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
              <Text style={styles.textLikeBlur} key={item.like_count}>
                {item.like_count}
              </Text>
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
              handleLikePress(item.uuid.toString());
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
        ref={flatListRefMain}
        data={DataForum}
        renderItem={renderItem}
        keyExtractor={(index, item) => index.uuid.toString()}
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
                <Text>Bạn đang nghĩ gì?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <ImageIcon />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemListPost;
