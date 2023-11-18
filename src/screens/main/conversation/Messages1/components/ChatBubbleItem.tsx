import {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from '../styles';
import {IMessage, ListMessage} from '../types';

export const ChatBubble: React.FC = () => {
  const styles = useStyles();

  const [showTime, setShowTime] = useState(false);
  const [showImageNotUser, setShowImageNotUser] = useState(false);

  const handleShowTime = () => {
    setShowTime(true);
    if (showTime) {
      setShowTime(false);
    }
  };

  const ItemChatBubble: React.FC<IMessage> = ({
    uuid,
    message,
    conversation_uuid,
    deleted_at,
    user_uuid,
    created_at,
    updated_at,
    image,
  }) => (
    <View
      style={{
        alignItems: uuid ? styles.user.alignItems : styles.notuser.alignItems,
      }}>
      <View>
        {!uuid ? (
          <View style={[styles.viewRow, {alignItems: 'flex-start'}]}>
            <View>
              <Image
                style={{
                  borderRadius: 100,
                  width: 36,
                  height: 36,
                  marginTop: 6,
                  marginRight: 6,
                }}
                source={{
                  uri: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/336048770_935586861123295_4424538869792396441_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LR6u4N8oTB8AX8L8q1Y&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBzxvFZh9bOk3WWqwJm4p3bImh-ceBClOCtfoB-_1ovqQ&oe=655C96F5',
                }}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.bubbleNotUser}
                onPress={() => {
                  handleShowTime();
                }}>
                <Text style={styles.textNotUser}>{message}</Text>
              </TouchableOpacity>
              {showTime && (
                <Text style={styles.textTimeNotUser}>{created_at}</Text>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.viewTime}>
            <TouchableOpacity
              style={styles.bubbleUser}
              onPress={() => {
                handleShowTime();
              }}>
              <Text style={styles.textUser}>{message}</Text>
            </TouchableOpacity>
            {showTime && <Text style={styles.textTimeUser}>{created_at}</Text>}
          </View>
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      data={ListMessage}
      renderItem={renderItem => (
        <ItemChatBubble
          uuid={renderItem.item.uuid}
          message={renderItem.item.message}
          created_at={renderItem.item.created_at}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      style={{paddingVertical: 6}}
      scrollEnabled={false}
    />
  );
};
