import {Icon, Text} from '@rneui/base';
import {useEffect, useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  LogBox,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EmojiModal from 'react-native-emoji-modal';
import useStyles from './styles';
import {CustomFooterProps} from './types';

const FooterCustom: React.FunctionComponent<CustomFooterProps> = props => {
  const styles = useStyles();

  const [textInputValue, setTextInputValue] = useState<string>('');
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoiji, setIsShowEmoiji] = useState<boolean>(false);

  useEffect(() => {
    LogBox.ignoreLogs([
      'Warning: Failed prop type: Invalid props.style key `boxSizing` supplied to `Text`.',
    ]);
  }, []);

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

  return (
    <KeyboardAvoidingView behavior={'height'}>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.viewRow}>
            <TouchableOpacity
              style={styles.viewIconLeft}
              onPress={props.onPressLeftIcon}>
              {props.leftIcon?.name && (
                <Icon
                  type={props.leftIcon.type}
                  name={props.leftIcon.name}
                  size={props.leftIcon.size}
                  color={props.leftIcon.color || styles.leftIcon.color}
                />
              )}
            </TouchableOpacity>

            <View style={styles.viewtextInput}>
              <TextInput
                style={styles.textInput}
                placeholder={props.placeholder}
                value={textInputValue}
                onChangeText={text => setTextInputValue(text)}
                multiline={true}
              />
            </View>

            {props.imageUri?.uri && (
              <Image
                style={styles.profileImage}
                source={{uri: `${props.imageUri.uri}`}}
              />
            )}
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={styles.rightIconLeft}
                onPress={handleIconPress}>
                {props.rightIconleft?.name && (
                  <Icon
                    type={props.rightIconleft?.type}
                    size={24}
                    name={props.rightIconleft?.name}
                    color={props.rightIconleft?.color || styles.rightIcon.color}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rightIconRight}
                onPress={props.onPressRightIconRight}>
                {props.rightIconright?.name && (
                  <Icon
                    type={props.rightIconright.type}
                    name={props.rightIconright.name}
                    size={props.rightIconright.size}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isShowEmoiji && (
        <View style={styles.viewEmojiModal}>
          <View style={styles.viewClearAll}>
            <TouchableOpacity onPress={handleClearEmoji}>
              <Text style={styles.textClearAll}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View key="emoji-modal">
            <EmojiModal
              onEmojiSelected={handleEmojiSelected}
              containerStyle={styles.containerEmojiModal}
              backgroundStyle={styles.backGroundEmojiModal}
              searchStyle={styles.searchEmojiModal}
              headerStyle={styles.headerEmojiModal}
              modalStyle={styles.modalEmojiModal}
              emojiStyle={styles.emojiEmojiModal}
              emojiSize={40}
            />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};
export default FooterCustom;
