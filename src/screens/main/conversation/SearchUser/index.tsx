import {Text} from '@rneui/base';
import {Icon} from '@rneui/themed';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ENDPOINTS} from '../../../../environment';
import {UserI} from '../../../../redux';
import apiService from '../../../../redux/services/api.service';
import UserItem from './components/UserItem';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';

const SearchUserScreen: FunctionComponent = () => {
  const styles = useStyles();
  const [data, setData] = useState<UserI[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const handleInputFocus = () => {
    setInputFocused(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await apiService.get(`${ENDPOINTS.GET_ALL_USER}`);
      // console.log(data);
      if (data.code === 200) {
        setData(data.data);
        handleInputFocus();
      }
    };

    fetchData();
  }, []);

  const renderItem = (item: UserI) => (
    <UserItem {...item} key={item.uuid.toString()} />
  );

  const filteredData = data.filter(item =>
    (item.fullname ?? '').toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon
            name={'arrow-back-outline'}
            type="ionicon"
            size={24}
            color={styles.header.color}
            onPress={() => NavigationService.goBack()}
          />
          <TextInput
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            placeholder="Search user"
            style={styles.input}
            placeholderTextColor={styles.input.color}
          />
        </View>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.textStyle}>Recommend for you</Text>
          }
          data={filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item: UserI) => item.uuid.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchUserScreen;
