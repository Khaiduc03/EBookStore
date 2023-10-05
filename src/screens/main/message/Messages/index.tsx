import {Icon, Text} from '@rneui/base';
import React, {Fragment, useRef, useState} from 'react';
import {
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
import {ChatBubble} from './components/RenderItem/ChatBubbleItem';
import useStyles from './styles';
import {messages} from './types';

const Message: React.FC = () => {
  const styles = useStyles();

  const [textInputValue, setTextInputValue] = useState<string>('');
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<View>(null);
  const emojiRef = useRef<View>(null);

  const handleIconEmojiPress = () => {
    setIsShowEmoji(!isShowEmoji);
    Keyboard.dismiss;
    if (!isShowEmoji) {
      Keyboard.dismiss;
      inputRef.current?.setNativeProps(styles.viewEmoji);
      emojiRef.current?.setNativeProps(styles.viewEmoji);
    } else {
      setIsShowEmoji(false);
      inputRef.current?.setNativeProps(styles.viewBlur);
      emojiRef.current?.setNativeProps(styles.viewBlur);
    }
  };

  console.log('isShowEmoji: ', isShowEmoji);

  const handleClearEmoji = () => {
    setSelectedEmojis([]);
    setTextInputValue('');
  };

  const handleEmojiSelected = (emoji: string | null) => {
    if (emoji !== null) {
      setSelectedEmojis([...selectedEmojis, emoji]);
      setTextInputValue(textInputValue + emoji);
    }

    console.log('Click Icon: ', emoji);
  };

  const handleSendMessage = () => {
    setTextInputValue('');
    scrollViewRef.current?.scrollToEnd({animated: true});
  };

  const handleTouchableWithoutFeedback = () => {
    Keyboard.dismiss;
    inputRef.current?.setNativeProps(styles.viewBlur);
    emojiRef.current?.setNativeProps(styles.viewBlur);
  };

  const handleFocus = () => {
    setIsShowEmoji(false);
    inputRef.current?.setNativeProps(styles.viewFocus);
  };

  const handleBlur = () => {
    Keyboard.dismiss;
    inputRef.current?.setNativeProps(styles.viewBlur);
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
    emojiRef.current?.setNativeProps(styles.viewBlur);
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
            }}
            imageUri={{
              uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
            }}
            fullName="Jhon Abraham"
            userStatus="Active now"
            rightIconleft={{
              name: 'call-outline',
              type: 'ionicon',
            }}
            rightIconRight={{
              name: 'videocam-outline',
              type: 'ionicon',
            }}
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
          <View ref={emojiRef} style={styles.viewFooter}>
            <View style={styles.viewRow}>
              <View style={styles.leftContainer}>
                <View style={styles.leftIcon}>
                  <TouchableOpacity>
                    <Icon name="attach-outline" type="ionicon" size={30} />
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                style={[
                  styles.textInput,
                  {
                    height:
                      textInputValue.split('\n').length > 1 ||
                      selectedEmojis.length > 9
                        ? styles.textInputHeightAutoLimit.maxHeight
                        : styles.textInputHeightAuto.height,
                  },
                ]}
                placeholder="Write your message"
                value={textInputValue}
                onChangeText={text => setTextInputValue(text)}
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
        </View>
      </Fragment>
    </View>
  );
};

export default Message;
