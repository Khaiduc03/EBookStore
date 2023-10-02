import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';

import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/base';
import {getListComic} from '../../../../redux/selectors/comic.selector';
import {ComicActions, ComicReducer} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getListComic);

  console.log(dataComic);
  const styles = useStyles();
  const [search, setSearch] = useState('');
  const handlePressSearch = () => {
    console.log(search);
    NavigationService.navigate(routes.TOPICS);
  };
  const handlePress = (page: number) => {
    dispatch(ComicActions.getListData(1));
  };

  return (
    <View style={styles.container}>
      <SearchCustom
        setValue={setSearch}
        value={search}
        onPress={handlePressSearch}
      />
      {/* 
      <Button icon={<Icon name="search" />} title={'hello'}></Button> */}
      <TouchableOpacity
        style={{backgroundColor: '#000', height: 100, width: 100}}
        onPress={() => handlePress(1)}>
        <Text>GetData</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(dataComic)} </Text>
    </View>
  );
};

export default Search;
