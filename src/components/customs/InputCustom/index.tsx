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

const InputCustom: FunctionComponent<InputProps & TextInputProps> = props => {
  const [inputFocused, setInputFocused] = React.useState(false);

  const styles = useStyles();

  const [secure, setSecure] = React.useState<boolean>(true);
  const _renderSecure = () => {
    return (
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        {secure ? <EyeOffIcon /> : <EyeOnIcon />}
      </TouchableOpacity>
    );
  };
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <Input
        secureTextEntry={props.secure && secure}
        inputContainerStyle={[
          styles.inputContainer || props.style,
          props.style,
        ]}
        placeholder={props.placeholder}
        leftIconContainerStyle={styles.icon}
        rightIconContainerStyle={styles.icon}
        rightIcon={props.secure && _renderSecure()}
        inputStyle={[inputFocused ? styles.inputFocus : styles.inputBlur]}
        value={props.value}
        onChangeText={props.onChangeText}
        renderErrorMessage={false}
        placeholderTextColor={styles.placeHolder.color}
        keyboardType={props.keyboardType}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...props}
      />
    </TouchableNativeFeedback>
  );
};

export default InputCustom;
