import React, {FunctionComponent} from 'react';

import {Input, InputProps as BaseIPProps} from '@rneui/themed';
import {
  Keyboard,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import useStyles from './styles';
import {InputProps} from './types';
import {EyeOffIcon, EyeOnIcon, LockIcon} from '../../../assets/icons';

const InputCustom: FunctionComponent<
  InputProps & TextInputProps & BaseIPProps
> = props => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const styles = useStyles();
  const [secure, setSecure] = React.useState<boolean>(true);
  const _renderSecure = () => {
    return (
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        {secure ? <EyeOffIcon /> : <EyeOnIcon />}
      </TouchableOpacity>
    );
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <Input
        secureTextEntry={props.secure && secure}
        inputContainerStyle={[styles.inputContainer, props.style]}
        placeholder={props.placeholder}
        // leftIcon={(props.secure && <LockIcon />) || props.leftIcon}
        leftIconContainerStyle={[styles.icon, styles.iconLeft]}
        rightIconContainerStyle={styles.icon}
        rightIcon={props.secure && _renderSecure()}
        inputStyle={styles.input}
        style={[(styles.input.borderBottomColor = 'red')]}
        value={props.value}
        onChangeText={props.onChangeText}
        renderErrorMessage={false}
        placeholderTextColor={styles.placeHolder.color}
        keyboardType={props.keyboardType}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TouchableNativeFeedback>
  );
};

export default InputCustom;
