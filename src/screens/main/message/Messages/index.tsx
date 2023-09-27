import React from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useStyles from './styles';

import {HeaderCustom} from '../../../../components';
import FooterCustom from '../../../../components/customs/FooterCustom';
import {IMessage, messages} from './types';

const Message: React.FC = () => {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

        <View style={styles.footer}>
          <FooterCustom
            leftIcon={{name: 'attach-outline', type: 'ionicon', size: 30}}
            placeholder="Write your message"
            rightIconleft={{name: 'happy', type: 'ionicon', size: 30}}
            rightIconright={{name: 'send', type: 'ionicon', size: 30}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ChatBubble: React.FC<IMessage> = ({isUser, text, time}) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          alignItems: isUser
            ? styles.user.alignItems
            : styles.notuser.alignItems,
        }}>
        <View>
          {!isUser ? (
            <View style={styles.viewRow}>
              {/* <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s900-c-k-c0x00ffffff-no-rj',
                }}
              /> */}
              <View style={styles.viewTime}>
                <View style={styles.bubbleNotUser}>
                  <Text style={styles.textNotUser}>{text}</Text>
                </View>
                <Text style={styles.textTimeNotUser}>{time}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.viewTime}>
              <View style={styles.bubbleUser}>
                <Text style={styles.textUser}>{text}</Text>
              </View>
              <Text style={styles.textTimeUser}>{time}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Message;
