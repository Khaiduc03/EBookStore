import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icon} from '@rneui/base';
import useStyles from './styles';
import {SearchBarComponentProps} from './types';

const SearchCustom: React.FunctionComponent<
  SearchBarComponentProps
> = props => {
  const styles = useStyles();
  const [inputFocused, setInputFocused] = useState(false);

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
      cancelIcon={
        <Icon
          onPress={() => Keyboard.dismiss()}
          name="search"
          size={24}
          color={styles.cancelIcon.color}
        />
      }
      autoFocus={props.autoFocus}
      returnKeyType="search"
      inputStyle={props.inputStyle || styles.inputStyle}
      onSubmitEditing={props.onPress}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      clearIcon={styles.clearIcon}
      onPressIn={props.onPress}
    />
  );
};

export default SearchCustom;
