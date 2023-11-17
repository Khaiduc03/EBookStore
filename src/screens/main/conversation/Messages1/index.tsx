import {useRoute} from '@react-navigation/native';
import {Icon, Text} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import AvatarComponets from './components/CameraGallery';
import {ChatBubble} from './components/ChatBubbleItem';
import useStyles from './styles';
import {IMessage, ListMessage} from './types';

const MessageScreen: React.FC = () => {
  const {params} = useRoute() as any;

  const styles = useStyles();

  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<View>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const footerRef = useRef<View>(null);

  React.useEffect(() => {
    console.log(params.uuid);
    scrollViewRef.current?.scrollToEnd({animated: true});
  }, []);

  const handleIconEmojiPress = () => {
    setIsShowEmoji(!isShowEmoji);
    if (!isShowEmoji) {
      Keyboard.dismiss();
    }
    footerRef.current?.setNativeProps(
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
        uuid: true,
        message: newMessage,
        created_at: currentTime,
      };

      setNewMessage('');
      scrollViewRef.current?.scrollToEnd({animated: true});

      ListMessage.push(newMessageItem);
    }
  };

  const handleTouchableWithoutFeedback = () => {
    Keyboard.dismiss;
    footerRef.current?.setNativeProps(styles.viewBlur);
    setIsShowEmoji(false);
  };

  const handleFocus = () => {
    setIsShowEmoji(false);
    // footerRef.current?.setNativeProps(styles.viewFocus);
    if (!isShowEmoji) {
      Keyboard.dismiss;
    }
  };

  const handleBlur = () => {
    footerRef.current?.setNativeProps(styles.viewBlur);
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
            uri: params.joined_url,
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
            <ChatBubble />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      {showScrollButton && (
        <TouchableOpacity
          onPress={handleScrollToEnd}
          style={styles.btnArrowDown}>
          <Icon name="chevron-down" type="ionicon" size={30} />
        </TouchableOpacity>
      )}

      <Animated.View ref={footerRef} style={styles.footer}>
        <View>
          <View style={styles.viewRow}>
            <TouchableOpacity style={styles.leftContainer}>
              <AvatarComponets />
            </TouchableOpacity>

            <TextInput
              style={[
                styles.textInput,
                {
                  height:
                    newMessage.split('\n').length > 1
                      ? styles.textInputHeightAutoLimit.height
                      : styles.textInputHeightAuto.height,
                },
              ]}
              placeholder="Write your message"
              value={newMessage}
              onChangeText={text => setNewMessage(text)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              multiline={true}
              underlineColorAndroid={'black'}
            />

            <TouchableOpacity
              style={styles.rightIconLeft}
              onPress={handleIconEmojiPress}>
              <Icon name="happy" type="ionicon" size={30} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rightIconRight}
              onPress={handleSendMessage}>
              <Icon name="send" type="ionicon" size={30} />
            </TouchableOpacity>
          </View>
          {isShowEmoji && (
            <View style={styles.viewEmojis}>
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
                showSearchBar={false}
              />
            </View>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default MessageScreen;
