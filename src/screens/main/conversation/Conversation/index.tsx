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
import dynamicLinks from '@react-native-firebase/dynamic-links';
import moment from 'moment';
const ConversationItemMemoized = memo(ConversationItem);

const ConversationScreen: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const listConversation: ConversationI[] = useAppSelector(getListConversation);

  const token = useAppSelector(getAuthAccessToken);

  useEffect(() => {
    console.log(listConversation);
    dispatch(ChatActions.handleGetListConversation(token));

    return () => {
      console.log('unmount ConversationScreen');
    };
  }, []);

  const renderItem = (item: ConversationI) => (
    <ConversationItemMemoized {...item} key={item.uuid.toString()} />
  );

  const sortedData = [...listConversation].sort((a, b) => {
    const now = moment();
    const postTimeA = moment(a.last_message_time || a.created_at);
    const postTimeB = moment(b.last_message_time || b.created_at);

    const durationA = moment.duration(now.diff(postTimeA));
    const durationB = moment.duration(now.diff(postTimeB));

    // Compare the actual durations to determine the order
    return (
      durationA.asMilliseconds() - durationB.asMilliseconds() &&
      postTimeB.valueOf() - postTimeA.valueOf()
    );
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
