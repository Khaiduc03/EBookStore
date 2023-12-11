import React, {memo, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeaderCustom, SearchCustom} from '../../../../components';

import useStyles from './styles';

import {ConversationI, getAuthAccessToken} from '../../../../redux';
import {ConversationItem} from './components/ConversationItem';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ChatActions} from '../../../../redux/reducer/chat.reducer';
import {getListConversation} from '../../../../redux/selectors/chat.selector';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {parseISO} from 'date-fns';

const ConversationItemMemoized = memo(ConversationItem);

const ConversationScreen: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const listConversation: ConversationI[] = useAppSelector(getListConversation);

  const token = useAppSelector(getAuthAccessToken);

  useEffect(() => {
    dispatch(ChatActions.handleGetListConversation(token));

    return () => {
      console.log('unmount ConversationScreen');
    };
  }, []);

  const renderItem = (item: ConversationI) => (
    <ConversationItemMemoized {...item} key={item.uuid.toString()} />
  );

  const sortedData = [...listConversation].sort((a, b) => {
    // Giả sử thời gian được lưu trữ trong trường createdAt
    const timeA = parseISO(a.last_message_time);
    const timeB = parseISO(b.last_message_time);

    // Sắp xếp theo thời gian giảm dần (mới nhất đầu tiên)

    // Sắp xếp theo thời gian giảm dần (mới nhất đầu tiên)
    return timeB.getTime() - timeA.getTime();
  });

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
                // value={searchTerm}
                // setValue={setSearchTerm}
                autoFocus={false}
                onPress={() => {
                  console.log('hih');
                  NavigationService.navigate(routes.SEARCH_USER);
                }}
              />
              <View style={styles.imageNoData}></View>
            </View>
          ) : (
            <FlatList
              data={sortedData}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.uuid.toString()}
              ListHeaderComponent={
                <TouchableOpacity
                  onPress={() => {
                    console.log('hih');
                    NavigationService.navigate(routes.SEARCH_USER);
                  }}>
                  <SearchCustom
                    onPress={() => {
                      console.log('hih');
                      NavigationService.navigate(routes.SEARCH_USER);
                    }}
                  />
                </TouchableOpacity>
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
