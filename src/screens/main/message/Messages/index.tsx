import {Icon, Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  LogBox,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EmojiModal from 'react-native-emoji-modal';
import {HeaderCustom} from '../../../../components';
import {ChatBubble} from './components/RenderItem/ChatBubbleItem';
import useStyles from './styles';
import {messages} from './types';

const Message: React.FC = () => {
  const styles = useStyles();

  const [textInputValue, setTextInputValue] = useState<string>('');
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoiji, setIsShowEmoiji] = useState<boolean>(false);

  const handleEmojiSelected = (emoji: string | null) => {
    if (emoji !== null) {
      setSelectedEmojis([...selectedEmojis, emoji]);
      setTextInputValue(textInputValue + emoji);
    }
  };

  const handleClearEmoji = () => {
    setSelectedEmojis([]);
    setTextInputValue('');
  };

  const handleIconPress = () => {
    setIsShowEmoiji(!isShowEmoiji);
  };

  const handleTouchableWithoutFeedback = () => {
    if (isShowEmoiji) {
      setIsShowEmoiji(!isShowEmoiji);
    }

    Keyboard.dismiss();
  };

  useEffect(() => {
    LogBox.ignoreLogs([
      'Warning: Failed prop type: Invalid props.style key `boxSizing` supplied to `Text`.',
    ]);
  }, []);

  return (
    <TouchableWithoutFeedback onPressOut={handleTouchableWithoutFeedback}>
      <View style={styles.container}>
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
            <ScrollView showsVerticalScrollIndicator={false}>
              {messages.map((message, index) => (
                <ChatBubble key={index} {...message} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.viewFooter}>
            <View style={styles.viewIconLeft}>
              <TouchableOpacity>
                <Icon name="attach-outline" type="ionicon" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.viewtextInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Write your message"
                value={textInputValue}
                onChangeText={text => setTextInputValue(text)}
                multiline={true}
              />
            </View>

            <View style={styles.rightContainer}>
              <View style={styles.rightIconLeft}>
                <TouchableOpacity onPress={handleIconPress}>
                  <Icon name="happy" type="ionicon" size={30} />
                </TouchableOpacity>
              </View>
              <View style={styles.rightIconRight}>
                <TouchableOpacity>
                  <Icon name="send" type="ionicon" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {isShowEmoiji && (
            <View style={styles.viewBackgroundEmoji}>
              <View style={styles.viewClearAll}>
                <TouchableOpacity
                  onPress={handleClearEmoji}
                  style={styles.btnClearAll}>
                  <Text style={styles.textClearAll}>Clear All</Text>
                </TouchableOpacity>
              </View>
              <EmojiModal
                onEmojiSelected={handleEmojiSelected}
                containerStyle={styles.containerEmojiModal}
                backgroundStyle={styles.backGroundEmojiModal}
                searchStyle={styles.searchEmojiModal}
                headerStyle={styles.headerEmojiModal}
                modalStyle={styles.modalEmojiModal}
                emojiStyle={styles.emojiEmojiModal}
                columns={10}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Message;
