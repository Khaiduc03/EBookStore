import {Icon, Text} from '@rneui/base';
import React, {useRef, useState} from 'react';
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

  const handleSendMessage = () => {
    setTextInputValue('');
    scrollViewRef.current?.scrollToEnd({animated: true});
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
    if (isShowEmoji) {
      setIsShowEmoji(!isShowEmoji);
    }
  };

  const handleScrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
    setShowScrollButton(false);
  };

  const handleEmojiSelected = (emoji: string | null) => {
    if (emoji !== null) {
      setSelectedEmojis([...selectedEmojis, emoji]);
      setTextInputValue(textInputValue + emoji);
    }

    console.log('Click Icon: ', emoji);
  };

  const handleClearEmoji = () => {
    setSelectedEmojis([]);
    setTextInputValue('');
  };

  const handleIconPress = () => {
    setIsShowEmoji(!isShowEmoji);
    Keyboard.dismiss();
  };

  const handleTouchableWithoutFeedback = () => {
    if (isShowEmoji) {
      setIsShowEmoji(!isShowEmoji);
    }
    Keyboard.dismiss;
  };

  const handleFocusTouchableWithoutFeedback = () => {
    if (isShowEmoji) {
      setIsShowEmoji(false);
    }

    scrollViewRef.current?.scrollToEnd({animated: true});
    setShowScrollButton(false);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleTouchableWithoutFeedback}>
        <View style={styles.wrapper}>
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

          <View style={styles.body}>
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}>
              {messages.map((message, index) => (
                <ChatBubble key={index} {...message} />
              ))}
            </ScrollView>
            {showScrollButton && (
              <TouchableOpacity
                onPress={handleScrollToEnd}
                style={styles.btnArrowDown}>
                <Icon name="arrow-down-outline" type="ionicon" size={30} />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.viewFooter}>
            <View style={styles.viewIconLeft}>
              <TouchableOpacity>
                <Icon name="attach-outline" type="ionicon" size={30} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={[
                styles.textInput,
                {
                  height:
                    textInputValue.split('\n').length > 5
                      ? styles.textInputHeightAutoLimit.height
                      : styles.textInputHeightAuto.height,
                },
              ]}
              placeholder="Write your message"
              value={textInputValue}
              onChangeText={text => setTextInputValue(text)}
              onFocus={handleFocusTouchableWithoutFeedback}
              multiline={true}
              numberOfLines={5}
            />

            <View style={styles.rightContainer}>
              <View style={styles.rightIconLeft}>
                <TouchableOpacity onPress={handleIconPress}>
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
                style={styles.iconEmoji}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Message;
