import {Icon, Text} from '@rneui/base';
import React, {Fragment, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Keyboard,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import * as ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {PERMISSION_TYPE, usePermission} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {AuthActions} from '../../../../redux';
import {showToastError} from '../../../../utils';
import {ChatBubble} from './components/renderItem/ChatBubbleItem';
import useStyles from './styles';
import {IMessage, messages} from './types';

const Message: React.FC = () => {
  const styles = useStyles();

  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<View>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const footerRef = useRef<View>(null);
  const translateY = useRef(new Animated.Value(0)).current;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAttachPress = () => {
    // Hiển thị modal cho người dùng chọn giữa camera và thư viện
    setIsShowSelect(true);
    Keyboard.dismiss;
    inputRef.current?.setNativeProps(styles.viewFocusSelectImage);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsShowSelect(false);
    if (option === 'camera') {
      showCamera();
    } else if (option === 'gallery') {
      showGallery();
    }
  };

  const handleIconEmojiPress = () => {
    setIsShowEmoji(!isShowEmoji);
    if (!isShowEmoji) {
      Keyboard.dismiss();
    }
    inputRef.current?.setNativeProps(
      isShowEmoji ? styles.viewBlur : styles.viewEmoji,
    );
  };

  const handleClearEmoji = () => {
    setSelectedEmojis([]);
    setNewMessage('');
  };

  const handleEmojiSelected = (emoji: string | null) => {
    if (emoji !== null) {
      setSelectedEmojis([...selectedEmojis, emoji]);
      setNewMessage(newMessage + emoji);
    }

    console.log('Click Icon: ', emoji);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const newMessageItem: IMessage = {
        isUser: true,
        text: newMessage,
        time: currentTime,
      };

      setNewMessage('');
      scrollViewRef.current?.scrollToEnd({animated: true});

      messages.push(newMessageItem);
    }
  };

  const handleTouchableWithoutFeedback = () => {
    Keyboard.dismiss;
    inputRef.current?.setNativeProps(styles.viewBlur);
    setIsShowEmoji(false);
  };

  const handleFocus = () => {
    Animated.timing(translateY, {
      toValue: -16,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsShowEmoji(false);
    setIsShowSelect(false);
    inputRef.current?.setNativeProps(styles.viewBlur);
    if (!isShowEmoji) {
      Keyboard.dismiss;
    }
  };

  const handleBlur = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Keyboard.dismiss;
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;

    if (offsetY + scrollViewHeight >= contentHeight - 10) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }
    inputRef.current?.setNativeProps(styles.viewBlur);
  };

  const handleScrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
    setShowScrollButton(false);
  };

  const permission = usePermission();
  const dispatch = useDispatch();
  //show menu choose image
  const [isShow, setIsShow] = useState<boolean>(false);

  const optionsCamera: ImagePicker.CameraOptions = {
    quality: 1,
    mediaType: 'photo',
    cameraType: 'front',
    saveToPhotos: true,
  };

  const optionsLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    videoQuality: 'high',
    selectionLimit: 0,
    maxWidth: 500,
    maxHeight: 500,
  };

  const showCamera = async () => {
    setIsShow(false);
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(async result => {
      if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
        await permission.showPermissionDialog(PERMISSION_TYPE.camera);
      } else {
        const result = await ImagePicker.launchCamera(optionsCamera);
        if (result.errorCode) {
          showToastError(result.errorMessage + '');
        } else if (result.didCancel) {
          showToastError("You haven't taken a photo yet");
          inputRef.current?.setNativeProps(styles.viewBlur);
        } else if (result.errorMessage) {
          showToastError('An error occurred when opening the camera');
          inputRef.current?.setNativeProps(styles.viewBlur);
        } else if (result.assets) {
          const formdata = new FormData();
          formdata.append('avatar', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          await handleUploadImage(formdata);
        }
      }
    });
    setIsShow(false);
  };

  const showGallery = () => {
    ImagePicker.launchImageLibrary(optionsLibrary, response => {
      if (
        response.assets &&
        response.assets.length > 0 &&
        response.assets[0].uri
      ) {
        setSelectedImage(response.assets[0].uri);
        inputRef.current?.setNativeProps(styles.viewBlur);
      } else {
        showToastError('You have not selected a photo yet');
        inputRef.current?.setNativeProps(styles.viewBlur);
      }
    });
  };

  const handleUploadImage = async (formdata: any) => {
    dispatch(AuthActions.handleUpdateAvatar(formdata));
  };

  return (
    <View style={styles.container}>
      <Fragment>
        <ScrollView
          contentContainerStyle={styles.containerScrollView}
          stickyHeaderIndices={[0]}
          overScrollMode={'never'}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}>
          <HeaderCustom
            leftIcon={{
              name: 'arrow-back-outline',
              type: 'ionicon',
              color: styles.iconBack.color,
              size: 30,
            }}
            imageUri={{
              uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
            }}
            fullName="Jhon Abraham"
            userStatus="Active now"
            rightIconleft={{
              name: 'call-outline',
              type: 'ionicon',
              color: styles.iconCall.color,
              size: 30,
            }}
            rightIconRight={{
              name: 'videocam-outline',
              type: 'ionicon',
              color: styles.iconVideocam.color,
              size: 30,
            }}
            onPressLeftIcon={() => NavigationService.navigate(routes.CHAT)}
          />

          <TouchableWithoutFeedback onPress={handleTouchableWithoutFeedback}>
            <View style={styles.body}>
              {messages.map((message, index) => (
                <ChatBubble key={index} {...message} />
              ))}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        {showScrollButton && (
          <TouchableOpacity
            onPress={handleScrollToEnd}
            style={styles.btnArrowDown}>
            <Icon name="arrow-down-outline" type="ionicon" size={30} />
          </TouchableOpacity>
        )}

        <View ref={inputRef} style={styles.footer}>
          <Animated.View
            ref={footerRef}
            style={[styles.viewFooter, {transform: [{translateY}]}]}>
            <View style={styles.viewRow}>
              <View style={styles.leftContainer}>
                <View style={styles.leftIcon}>
                  <TouchableOpacity onPress={handleAttachPress}>
                    <Icon name="attach-outline" type="ionicon" size={30} />
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                style={[
                  styles.textInput,
                  {
                    height:
                      newMessage.split('\n').length > 1 ||
                      selectedEmojis.length > 9
                        ? styles.textInputHeightAutoLimit.maxHeight
                        : styles.textInputHeightAuto.height,
                  },
                ]}
                placeholder="Write your message"
                value={newMessage}
                onChangeText={text => setNewMessage(text)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                multiline={true}
              />

              <View style={styles.rightContainer}>
                <View style={styles.rightIconLeft}>
                  <TouchableOpacity onPress={handleIconEmojiPress}>
                    <Icon name="happy" type="ionicon" size={30} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rightIconRight}>
                  <TouchableOpacity onPress={handleSendMessage}>
                    <Icon name="send" type="ionicon" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
          {isShowEmoji && (
            <View style={styles.viewBackgroundEmoji}>
              <View style={styles.viewClearAll}>
                <TouchableOpacity
                  onPress={handleClearEmoji}
                  style={styles.btnClearAll}>
                  <Text style={styles.textClearAll}>Clear All</Text>
                </TouchableOpacity>
              </View>

              <EmojiSelector
                category={Categories.symbols}
                onEmojiSelected={handleEmojiSelected}
                placeholder="Search"
                columns={10}
              />
            </View>
          )}
          {isShowSelect && (
            <View>
              <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => handleOptionSelect('camera')}>
                  <View>
                    <Icon name="camera-outline" type="ionicon" size={30} />
                    <Text>Camera</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionSelect('gallery')}>
                  <View>
                    <Icon name="image-outline" type="ionicon" size={30} />
                    <Text>Gallery</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </Fragment>
    </View>
  );
};

export default Message;