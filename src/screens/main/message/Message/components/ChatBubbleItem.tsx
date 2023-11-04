import {Text} from '@rneui/base';
import {View} from 'react-native';
import useStyles from '../styles';
import {IMessage} from '../types';

export const ChatBubble: React.FC<IMessage> = ({isUser, text, time}) => {
  const styles = useStyles();

  return (
    <View
      style={{
        alignItems: isUser ? styles.user.alignItems : styles.notuser.alignItems,
      }}>
      <View>
        {!isUser ? (
          <View style={styles.viewRow}>
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
  );
};
