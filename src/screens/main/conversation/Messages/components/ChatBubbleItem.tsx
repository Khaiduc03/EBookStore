import {Text} from '@rneui/base';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {MessageI, getAuthUserUuid} from '../../../../../redux';
import useStyles from '../styles';
import {useAppSelector} from '../../../../../hooks';

export const ChatBubble: React.FC<MessageI> = props => {
  const styles = useStyles();
  const [isUser, setIsUser] = useState(false);
  const uuid = useAppSelector(getAuthUserUuid);
  useEffect(() => {
    if (props.user_uuid === uuid) {
      setIsUser(true);
    }
  }, []);

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
                <Text style={styles.textNotUser}>{props.message}</Text>
              </View>
              <Text style={styles.textTimeNotUser}>{props.created_at}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.viewTime}>
            <View style={styles.bubbleUser}>
              <Text style={styles.textUser}>{props.message}</Text>
            </View>
            <Text style={styles.textTimeUser}>{props.created_at}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
