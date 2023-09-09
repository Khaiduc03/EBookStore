import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';

import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

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
    </View>
  );
};

export default Search;
