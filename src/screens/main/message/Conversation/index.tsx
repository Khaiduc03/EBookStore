import React, {useEffect, useState} from 'react';
import {FlatList, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {HeaderCustom, SearchCustom} from '../../../../components';

import useStyles from './styles';

import {ConversationI} from '../../../../redux';
import {ConversationItem} from './components/ConversationItem';

import {
  SocketContext,
  SocketProvider,
  socketIO,
} from '../../../../contexts/SocketContext';
import {listConversations} from './types';

const ConversationScreen: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const socket = React.useContext(SocketContext);

  const [data, setData] = useState<ConversationI[]>([]);
  // useEffect(() => {
  //   //console.log(socket);
  //   if (socket) {
  //     console.log('hihi');
  //     socket.on('conversations', data => {
  //       console.log('Received data:', data);
  //     });
  //     // Bạn có thể sử dụng socket ở đây
  //   }

  //   // Lưu ý: Đảm bảo xử lý ngắt kết nối hoặc làm sạch các tài nguyên khi component unmount
  //   // return () => {
  //   //   if (socket) {
  //   //     socket.off('conversations');
  //   //   }
  //   // };
  // }, [socket]);
  useEffect(() => {
    const handleConversations = (newData: ConversationI[]) => {
      console.log(newData);
      setData(newData);
    };

    // Subscribe to the 'conversations' event when the component mounts
    if (socket) {
      socket.on('conversations', handleConversations);

      // Unsubscribe when the component unmounts
      return () => {
        socket.off('conversations', handleConversations);
      };
    }
  }, [socket]);

  const renderItem = (item: ConversationI) => (
    <ConversationItem {...item} key={item.uuid.toString()} />
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerWarpper}>
          <View style={styles.header}>
            <HeaderCustom
              titleStyle={styles.textTitleHeader}
              leftIcon={{
                name: 'chatbubble-ellipses-outline',
                type: 'ionicon',
              }}
              title="Message"
            />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={listConversations}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.uuid.toString()}
            extraData={selectedId}
            ListHeaderComponent={
              <SearchCustom
                value={searchTerm}
                setValue={setSearchTerm}
                autoFocus={false}
              />
            }
            ListHeaderComponentStyle={{paddingVertical: 16}}
            showsVerticalScrollIndicator={false}
          />
          {/* <View style={styles.header}>
            <SearchCustom
              value={searchTerm}
              setValue={setSearchTerm}
              autoFocus={false}
            />
          </View>
          <View style={styles.listStyle}>
       
          </View> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConversationScreen;
