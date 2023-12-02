import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Icon, InputProps} from '@rneui/base';
import useStyles from './styles';

const SearchCustomV1: React.FunctionComponent<InputProps> = props => {
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
      onChangeText={props.onChangeText}
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
      onSubmitEditing={props.onSubmitEditing}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      clearIcon={styles.clearIcon}
    />
  );
};

export default SearchCustomV1;
