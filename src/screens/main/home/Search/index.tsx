import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';

import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/base';

const Search = () => {
  const styles = useStyles();
  const [search, setSearch] = useState('');
  const handlePressSearch = () => {
    console.log(search);
    NavigationService.navigate(routes.TOPICS);
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
    </View>
  );
};

export default Search;
