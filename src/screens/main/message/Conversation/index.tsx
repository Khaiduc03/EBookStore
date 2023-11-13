import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeaderCustom, SearchCustom} from '../../../../components';

import useStyles from './styles';

import {ConversationItem} from './components/ConversationItem';
import {ConversationI} from '../../../../redux';
import {listConversations} from './types';

const ConversationScreen: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // const sortByTime = (a: ItemData, b: ItemData): number => {
  //   const timeA = parseInt(a.time);
  //   const timeB = parseInt(b.time);

  //   return timeA - timeB;
  // };

  // data.sort(sortByTime);

  // const filteredData = data.filter(
  //   item =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  const renderItem = (item: ConversationI) => (
    <ConversationItem {...item} key={item.uuid.toString()} />
  );

  // return (
  //   <TouchableWithoutFeedback
  //     onPress={() => Keyboard.dismiss()}
  //     style={styles.container}>
  //     <View style={styles.wrapper}>
  //       <View style={styles.body}>
  //         <View style={styles.pdH}></View>
  //         <ScrollView showsVerticalScrollIndicator={false}>
  //           <View style={styles.pdHT}>
  //             <SearchCustom
  //               value={searchTerm}
  //               setValue={setSearchTerm}
  //               autoFocus={false}
  //             />
  //           </View>
  //           <View style={styles.flT}>
  //             <FlatList
  //               data={listConversations}
  //               renderItem={({item}) => renderItem(item)}
  //               keyExtractor={item => item.uuid.toString()}
  //               extraData={selectedId}
  //               scrollEnabled={false}
  //             />
  //           </View>
  //         </ScrollView>
  //       </View>
  //     </View>
  //   </TouchableWithoutFeedback>
  // );

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerWarpper}>
          <View style={styles.header}>
            <HeaderCustom
              titleStyle={styles.textTitleHeader}
              leftIcon={{name: 'chatbubble-ellipses-outline', type: 'ionicon'}}
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
