import React, {FunctionComponent} from 'react';

import {Input, InputProps as BaseIPProps} from '@rneui/themed';
import {
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import useStyles from './styles';
import {InputProps} from './types';
import {EyeOffIcon, EyeOnIcon} from '../../../assets/icons';

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
        secureTextEntry={props.secure && secure}
        inputContainerStyle={
          [inputFocused ? styles.inputContainerFocus : styles.inputContainer] ||
          props.style
        }
        placeholder={props.placeholder}
        leftIconContainerStyle={styles.icon || props.style}
        rightIconContainerStyle={styles.icon || props.style}
        rightIcon={props.secure && _renderSecure()}
        inputStyle={[inputFocused && styles.inputFocus] || props.style}
        value={props.value}
        onChangeText={props.onChangeText}
        renderErrorMessage={false}
        placeholderTextColor={styles.placeHolder.color || undefined}
        keyboardType={props.keyboardType}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...props}
      />
    </TouchableNativeFeedback>
  );
});

export default InputCustomV1;
