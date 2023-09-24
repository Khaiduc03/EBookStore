import {Text} from '@rneui/base';
import React from 'react';
import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useStyles from './styles';

import {Icon} from '@rneui/themed';
import {ScrollView} from 'react-native';
import {IMessage} from './types';
import {HeaderCustom, InputCustom} from '../../../../components';

const Header: React.FC = () => {
  return (
    <HeaderCustom
      leftIcon={{name: 'arrow-back-outline', type: 'ionicon', color: '#000'}}
      imageUri={{
        uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
      }}
      fullName="Jhon Abraham"
      userStatus="Active now"
      rightIconleft={{
        name: 'call-outline',
        type: 'ionicon',
        color: '#000',
      }}
      rightIconRight={{
        name: 'videocam-outline',
        type: 'ionicon',
        color: '#000',
      }}
    />
  );
};

const ChatBubble: React.FC<IMessage> = ({isUser, text, time}) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          alignItems: isUser ? 'flex-end' : 'flex-start',
        }}>
        <View>
          {!isUser && (
            <View style={styles.viewRow}>
              <View style={styles.viewImageTextChat}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
                  }}
                />
                <Text style={styles.text}>Jhon Abraham</Text>
              </View>
            </View>
          )}

          <View>
            <View
              style={[
                styles.bubble,
                {backgroundColor: isUser ? '#20A090' : '#d9d9d9'},
                isUser ? {borderTopRightRadius: 0} : {borderTopLeftRadius: 0},
              ]}>
              <Text style={styles.textM}>{text}</Text>
            </View>
            <View style={styles.viewTime}>
              {isUser ? (
                <Text style={styles.time}>{time}</Text>
              ) : (
                <Text style={styles.time}>{time}</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.footer}>
      <InputCustom
        placeholder="Write your message"
        inputContainerStyle={styles.input}
      />
      <TouchableOpacity style={styles.btnAttach}>
        <Icon name="attach-outline" type="ionicon" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCopy}>
        <Icon name="copy-outline" type="ionicon" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCamera}>
        <Icon name="camera-outline" type="ionicon" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnMic}>
        <Icon name="mic-outline" type="ionicon" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const Message: React.FC = () => {
  const styles = useStyles();
  const messages: IMessage[] = [
    {isUser: false, text: 'Hello! David Beckham', time: '9:00 AM'},
    {
      isUser: false,
      text: 'I hope you are doing well. I am writing to check in and see how you are feeling. I am always thinking of you, and I hope you are healthy and happy. If there is anything I can do to help, please do not hesitate to reach out.',
      time: '9:06 AM',
    },
    {isUser: true, text: "Hi! I'm fine.", time: '9:07 AM'},
    {
      isUser: true,
      text: 'Thank you for asking about my health these days. How are you doing? Where are you living?',
      time: '9:10 AM',
    },
    {
      isUser: false,
      text: "Sorry, I'm busy right now and can't reply to you later",
      time: '9:16 AM',
    },
    {
      isUser: true,
      text: "When you have free time, let's meet for coffee.",
      time: '9:20 AM',
    },
  ];

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Header />
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {messages.map((message, index) => (
              <ChatBubble key={index} {...message} />
            ))}
          </ScrollView>
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Message;
