import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

type SearchBarComponentProps = {};

const Search: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
        platform="android"
        leftIcon
        containerStyle={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#F89300',
          height: 56,
          width: 300,
          borderRadius: 16,
          justifyContent: 'center',
          backgroundColor: '#FEF4E6',
        }}
        inputStyle={{padding: 0}}
        cancelIcon={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default Search;
