import React, {FunctionComponent} from 'react';

import {Input, InputProps as BaseIPProps} from '@rneui/themed';
import {
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import {EyeOffIcon, EyeOnIcon} from '../../../assets/icons';
import useStyles from './styles';
import {InputProps} from './types';

const InputCustomV1: FunctionComponent<
  InputProps & TextInputProps & BaseIPProps
> = React.forwardRef<TextInput, InputProps & TextInputProps>((props, ref) => {
  const styles = useStyles();

  const [secure, setSecure] = React.useState<boolean>(true);

  const _renderSecure = () => {
    return (
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        {secure ? <EyeOffIcon /> : <EyeOnIcon />}
      </TouchableOpacity>
    );
  };

  const [inputFocused, setInputFocused] = React.useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <Input
        containerStyle={
          [inputFocused ? styles.containerFocus : styles.container] ||
          props.style
        }
        inputContainerStyle={
          [inputFocused ? styles.inputContainerFocus : styles.inputContainer] ||
          props.style
        }
        inputStyle={styles.input || props.style}
        placeholder={props.placeholder}
        leftIconContainerStyle={styles.icon || props.style}
        rightIconContainerStyle={styles.icon || props.style}
        rightIcon={props.secure && _renderSecure()}
        value={props.value}
        onChangeText={props.onChangeText}
        renderErrorMessage={false}
        placeholderTextColor={
          styles.placeholderColor.color || props.placeholder
        }
        keyboardType={props.keyboardType}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        secureTextEntry={props.secure && secure}
        {...props}
      />
    </TouchableNativeFeedback>
  );
});

export default InputCustomV1;
