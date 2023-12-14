import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemShare from './components/ItemUser';
import {FlatList} from 'react-native';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {getAllUser} from '../../../../redux/selectors/user.selector';
import {UserI} from '../../../../redux';
import {UserType} from '../../../../redux/types/user.type';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../navigation';
import {TextInput} from 'react-native';

const ShareUser = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const dataUser = useAppSelector(getAllUser);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    dispatch(UserAction.getListUser());

    return () => {};
  }, []);

  const filteredData =
    dataUser &&
    dataUser.filter(item =>
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
          />
        </View>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.textStyle}>Recommend for you</Text>
          }
          data={filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: {item: UserType}) => (
            <ItemShare {...item} key={item.uuid.toString()} />
          )}
          keyExtractor={item => item.uuid.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShareUser;
