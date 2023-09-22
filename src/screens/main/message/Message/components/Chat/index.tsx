import React, {useState} from 'react';
import {
  Keyboard,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '@rneui/base';
import useStyles from './styles';
import {data, ItemData, ItemProps} from './types';
import {HeaderCustom, SearchCustom} from '../../../../../../components';
import {Icon} from '@rneui/themed';

const Item = ({item, onPress, isSelected}: ItemProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor: isSelected ? '#F89300' : '#fff'}]}>
      <View style={styles.view0}>
        <View style={styles.view1}>
          <View style={styles.viewJA}>
            <Image source={{uri: item.image}} style={styles.viewImage} />
          </View>
          <View>
            <Text
              style={[
                styles.textName,
                {color: isSelected ? 'white' : 'black'},
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.textAuthor,
                {color: isSelected ? '#e6e6e6' : 'gray'},
              ]}>
              {item.author}
            </Text>
            <View style={styles.view2}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Icon
                    key={index}
                    name="star"
                    color={isSelected ? '#fff' : '#F89300'}
                    size={18}
                    type="font-awesome"
                    style={{marginEnd: 6}}
                  />
                ))}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
    <Item
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
            rightIconleft={{
              name: 'search-outline',
              type: 'ionicon',
              color: 'black',
            }}
            rightIconRight={{
              name: 'notifications-outline',
              type: 'ionicon',
              color: 'black',
            }}
            title="Message"
          />
          <SearchCustom value={searchTerm} setValue={setSearchTerm} />
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            extraData={selectedId}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
