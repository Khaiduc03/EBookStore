import {Icon, Text} from '@rneui/base';
import React, {Fragment, useRef, useState} from 'react';
import {
  Animated,
  Keyboard,
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
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {PERMISSION_TYPE, usePermission} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {CustomToastBottom} from '../../../../utils';
import {ChatBubble} from './components/ChatBubbleItem';
import useStyles from './styles';
import {IMessage, messages} from './types';
import AvatarComponets from './components/CameraGallery';

const MessageScreen: React.FC = () => {
  const styles = useStyles();

  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<View>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const footerRef = useRef<View>(null);
  const translateY = useRef(new Animated.Value(0)).current;

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
            onPressLeftIcon={() => NavigationService.goBack()}
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
                  <AvatarComponets />
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
        </View>
      </Fragment>
    </View>
  );
};

export default MessageScreen;
