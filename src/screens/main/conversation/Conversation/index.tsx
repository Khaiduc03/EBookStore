import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { HeaderCustom, SearchCustom } from '../../../../components';

import useStyles from './styles';

import { ConversationI, getAuthAccessToken } from '../../../../redux';
import { ConversationItem } from './components/ConversationItem';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { ChatActions } from '../../../../redux/reducer/chat.reducer';
import { getListConversation } from '../../../../redux/selectors/chat.selector';


const ConversationScreen: React.FC = () => {
  const styles = useStyles();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useAppDispatch();
  const [data, setData] = useState<ConversationI[]>([]);
  const listConversation: ConversationI[] = useAppSelector(getListConversation);
  const token = useAppSelector(getAuthAccessToken);

  useEffect(() => {
    dispatch(ChatActions.handleGetListConversation(token));
    listConversation.sort((a, b) => {
      return (
        new Date(b.last_message_time).getTime() -
        new Date(a.last_message_time).getTime()
      );
    });
    return () => {
      console.log('unmount ConversationScreen');
    };
  }, []);

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
          {listConversation.length === 0 ? (
            <View style={styles.bodyNoData}>
              <SearchCustom
                value={searchTerm}
                setValue={setSearchTerm}
                autoFocus={false}
              />
              <View style={styles.imageNoData}></View>
            </View>
          ) : (
            <FlatList
              data={listConversation}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.uuid.toString()}
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
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConversationScreen;
