import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native';
import useStyles from './styles';
import { SearchBarComponentProps } from './types';

const SearchCustom: React.FunctionComponent<SearchBarComponentProps> = props => {
  const styles = useStyles();
  const [search, setSearch] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const handleKeyPress = () => {
    console.log(search);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <SearchBar
      onChangeText={props.setValue}
      placeholder="Search..."
      value={props.value}
      platform="android"
      containerStyle={[
        props.containerStyle || styles.container,
        inputFocused
          ? styles.backGroundInputFocus
          : styles.backGroundInputNoFocus,
      ]}
      cancelIcon={{}}
      autoFocus={true}
      returnKeyType="search"
      inputStyle={props.inputStyle || styles.inputStyle}
      onSubmitEditing={props.onPress}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      clearIcon={styles.clearIcon}
    />
  );
};

export default SearchCustom;
