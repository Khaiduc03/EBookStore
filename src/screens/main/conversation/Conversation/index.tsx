import React, {useEffect, useState} from 'react';
import {FlatList, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {HeaderCustom, SearchCustom} from '../../../../components';

import useStyles from './styles';

import {ConversationI, getAuthAccessToken} from '../../../../redux';
import {ConversationItem} from './components/ConversationItem';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ChatActions} from '../../../../redux/reducer/chat.reducer';
import {getListConversation} from '../../../../redux/selectors/chat.selector';
import {NoConversation} from '../../../../assets/svg';

const ConversationScreen: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useAppDispatch();
  const [data, setData] = useState<ConversationI[]>([]);
  const listConversation: ConversationI[] = useAppSelector(getListConversation);
  const token = useAppSelector(getAuthAccessToken);

  useEffect(() => {
    dispatch(ChatActions.handleGetListConversation(token));
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
            <View>
                 <SearchCustom
                  value={searchTerm}
                  setValue={setSearchTerm}
                  autoFocus={false}
                />
              <NoConversation />
            </View>
          ) : (
            <FlatList
              data={listConversation}
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
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConversationScreen;
