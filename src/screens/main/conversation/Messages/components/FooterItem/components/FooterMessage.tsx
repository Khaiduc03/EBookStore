import {useRoute} from '@react-navigation/native';
import {Icon, Text} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks';
import {MessageI, RequestAddMessageI} from '../../../../../../../redux';
import {ChatActions} from '../../../../../../../redux/reducer/chat.reducer';
import {getListMessage} from '../../../../../../../redux/selectors/chat.selector';
import useStyles from '../../../styles';
import {ChatBubble} from './ChatBubbleItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FooterMessage = () => {
  const {params} = useRoute() as any;
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef<FlatList>(null);
  const inputRef = useRef<View>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  const translateY = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  const listMessage: MessageI[] = useAppSelector(getListMessage);

  useEffect(() => {
    scrollViewRef.current?.scrollToOffset({animated: true, offset: 0});
    setShowScrollButton(false);

    dispatch(
      ChatActions.handleJoinConversation({
        uuid: params.uuid,
      }),
    );
    return () => {
      console.log('unmount');
      dispatch(ChatActions.handleLeaveConversation('hihi'));
    };
  }, [params.uuid]);

  const handleIconEmojiPress = () => {
    setIsShowEmoji(!isShowEmoji);
    if (!isShowEmoji) {
      Keyboard.dismiss();
    }
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
      const newMessageItem: RequestAddMessageI = {
        conversation_uuid: params.uuid,
        message: newMessage,
      };

      dispatch(ChatActions.handleAddMessage(newMessageItem));

      setNewMessage('');
      scrollViewRef.current?.scrollToOffset({offset: 0, animated: true});
    }
  };

  const handleTouchableWithoutFeedback = () => {
    Keyboard.dismiss();
    setIsShowEmoji(false);
  };

  console.log(isShowEmoji);

  const handleFocus = () => {
    setIsShowEmoji(false);
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

    if (offsetY <= 10) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }
    inputRef.current?.setNativeProps(styles.viewBlur);
  };

  const handleScrollToEnd = () => {
    scrollViewRef.current?.scrollToOffset({animated: true, offset: 0});
    setShowScrollButton(false);
  };

  const renderItem = (item: MessageI) => (
    <Pressable onPress={handleTouchableWithoutFeedback}>
      <ChatBubble {...item} key={item.uuid.toString()} />
    </Pressable>
  );

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={listMessage}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.uuid.toString()}
        ref={scrollViewRef}
        inverted={true}
        onScroll={handleScroll}
      />

      <KeyboardAwareScrollView
        style={styles.footer}
        keyboardShouldPersistTaps="handled">
        <View>
          <View style={styles.viewRow}>
            <View style={styles.leftContainer}>
              <View>
                <Icon name="attach-outline" type="ionicon" size={30} />
              </View>
            </View>

            <TextInput
              style={[
                styles.textInput,
                {
                  height:
                    newMessage.split('\n').length > 1 ||
                    selectedEmojis.length > 9
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
            />

            <View style={styles.rightIconLeft}>
              <Pressable onPress={handleIconEmojiPress}>
                <Icon name="happy" type="ionicon" size={30} />
              </Pressable>
            </View>
            <View style={styles.rightIconRight}>
              <TouchableOpacity onPress={handleSendMessage}>
                <Icon name="send" type="ionicon" size={30} />
              </TouchableOpacity>
            </View>
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
      </KeyboardAwareScrollView>

      {showScrollButton && (
        <TouchableOpacity
          onPress={handleScrollToEnd}
          style={styles.btnArrowDown}>
          <Icon
            name="arrow-down-circle"
            color={styles.iconScroll.color}
            type="ionicon"
            size={30}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FooterMessage;
