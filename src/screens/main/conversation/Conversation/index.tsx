import React, {useEffect, useState} from 'react';
import {FlatList, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {HeaderCustom, SearchCustom} from '../../../../components';

import useStyles from './styles';

import {ConversationI} from '../../../../redux';
import {ConversationItem} from './components/ConversationItem';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ChatActions} from '../../../../redux/reducer/chat.reducer';
import {
  getListConversation,
} from '../../../../redux/selectors/chat.selector';

const ConversationScreen: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dispatch = useAppDispatch();
  const [data, setData] = useState<ConversationI[]>([]);
  const listConversation: ConversationI[] = useAppSelector(getListConversation);

  useEffect(() => {

      dispatch(ChatActions.handleGetListConversation());
    
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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ConversationScreen;
