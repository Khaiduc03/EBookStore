import {
  Keyboard,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text } from '@rneui/base';
import React from 'react';
import useStyles from './styles';
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import { Headers } from '../../../../../../components';
import { Icon } from '@rneui/themed';

interface IMessage {
  isUser: boolean;
  text: string;
  time: string;
}

const Header: React.FC = () => {
  const styles = useStyles();
  const [isPressedCall, setIsPressedCall] = React.useState(false);
  const [isPressedVideoCam, setIsPressedVideoCam] = React.useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="arrow-back" />
      </TouchableOpacity>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
        }}
      />
      <View style={styles.viewText}>
        <Text style={styles.text}>Jhon Abraham</Text>
        <Text style={styles.text1}>Active now</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btnCall,
          { backgroundColor: isPressedCall ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedCall(true)}
        onPressOut={() => setIsPressedCall(false)}>
        <Icon name="call-outline" type="ionicon" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnCallVideo,
          { backgroundColor: isPressedVideoCam ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedVideoCam(true)}
        onPressOut={() => setIsPressedVideoCam(false)}>
        <Icon name="videocam-outline" type="ionicon" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const ChatBubble: React.FC<IMessage> = ({ isUser, text, time }) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          alignItems: isUser ? 'flex-end' : 'flex-start',
        }}>
        <View style={styles.viewRow}>
          {!isUser && (
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
              }}
            />
          )}
          <View>
            <View
              style={[
                styles.bubble,
                { backgroundColor: isUser ? '#20A090' : '#d9d9d9' },
                isUser ? { borderTopRightRadius: 0 } : { borderTopLeftRadius: 0 },
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
  const [isPressedPaperClip, setIsPressedPaperClip] = React.useState(false);
  const [isPressedCopy, setIsPressedCopy] = React.useState(false);
  const [isPressedCamera, setIsPressedCamera] = React.useState(false);
  const [isPressedMic, setIsPressedMic] = React.useState(false);
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.btnAttach,
          { backgroundColor: isPressedPaperClip ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedPaperClip(true)}
        onPressOut={() => setIsPressedPaperClip(false)}>
        <Icon name="attach-outline" type="ionicon" size={30} />
      </TouchableOpacity>
      <TextInput placeholder="Write your message" style={styles.input} />
      <TouchableOpacity
        style={[
          styles.btnCopy,
          { backgroundColor: isPressedCopy ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedCopy(true)}
        onPressOut={() => setIsPressedCopy(false)}>
        <Icon name="copy-outline" type="ionicon" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnCamera,
          { backgroundColor: isPressedCamera ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedCamera(true)}
        onPressOut={() => setIsPressedCamera(false)}>
        <Icon name="camera-outline" type="ionicon" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnMic,
          { backgroundColor: isPressedMic ? '#999999' : 'transparent' },
        ]}
        onPressIn={() => setIsPressedMic(true)}
        onPressOut={() => setIsPressedMic(false)}>
        <Icon name="mic-outline" type="ionicon" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const Message: React.FC = () => {
  const styles = useStyles();
  const messages: IMessage[] = [
    { isUser: false, text: 'Hello! Jhon Abraham', time: '9:00 AM' },
    { isUser: true, text: 'Hi! Your profile looks great.', time: '9:01 AM' },
    {
      isUser: false,
      text: 'Thank you! I hope you find it helpful.',
      time: '9:02 AM',
    },
    { isUser: true, text: 'Yes, it is. Thanks!', time: '9:03 AM' },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Header />
          <View style={styles.body}>
            {messages.map((message, index) => (
              <ChatBubble key={index} {...message} />
            ))}
          </View>
          <Footer />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Message;
