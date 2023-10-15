import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SearchCustom} from '../../../../components';
import HeaderCustomV1 from '../../../../components/customs/HeaderCustomV1';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import {ChatItem} from './components/renderItem/ChatItem';
import useStyles from './styles';
import {data, ItemData} from './types';

const Chat: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const sortByTime = (a: ItemData, b: ItemData): number => {
    const timeA = parseInt(a.time);
    const timeB = parseInt(b.time);

    return timeA - timeB;
  };

  data.sort(sortByTime);

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderItem = ({item}: {item: ItemData}) => (
    <ChatItem
      item={item}
      onPress={() => setSelectedId(item.id.toString())}
      isSelected={item.id.toString() === selectedId}
      backgroundColor={''}
    />
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <View style={styles.pdH}>
            <HeaderCustomV1
              leftIcon={{
                name: 'arrow-back-outline',
                type: 'ionicon',
              }}
              iconMiddle={{
                name: 'chatbubble-ellipses-outline',
                type: 'ionicon',
              }}
              rightIconRight={{
                name: 'notifications-outline',
                type: 'ionicon',
              }}
              onPressLeftIcon={() =>
                NavigationService.navigate(routes.BOTTOM_TAB)
              }
              title="Message"
              titleStyle={styles.viewHeaderText}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.pdHT}>
              <SearchCustom value={searchTerm} setValue={setSearchTerm} />
            </View>
            <View style={styles.flT}>
              <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                extraData={selectedId}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
