import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import useStyles from './styles';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/themed';
import { Icon } from '@rneui/base';
import SearchCustom from '../../../../components/customs/Search';
import HeaderCustom from '../../../../components/customs/HeaderCustom';

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
       <HeaderCustom title='Detail' titleStyle={{fontSize:10}} rightIconRight={{name:'book',color:'green'}} rightIconleft={{name:'book',color:'green'}}/>
    </View>
   
  );
};

export default Search;
