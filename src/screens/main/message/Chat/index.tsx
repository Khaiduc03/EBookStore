import React, {useState} from 'react';
import {Keyboard, View, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Text} from '@rneui/base';
import useStyles from './styles';
import {data, ItemData, ItemProps} from './types';
import {ScrollView} from 'react-native';
import {ChatItem} from './components/RenderItems/renderItemChat';
import {HeaderCustom, SearchCustom} from '../../../../components';

const Chat: React.FC = () => {
  const styles = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

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
      textColor1={''}
      textColor2={''}
    />
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <HeaderCustom
            leftIcon={{name: 'comment', type: 'font-awesome', color: '#F89300'}}
            rightIconRight={{
              name: 'notifications-outline',
              type: 'ionicon',
              color: 'black',
            }}
            title="Message"
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <SearchCustom value={searchTerm} setValue={setSearchTerm} />
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              extraData={selectedId}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
