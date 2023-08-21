import React, { FunctionComponent } from 'react';

import { Input, InputProps as BaseIPProps } from '@rneui/themed';
import {
  Keyboard,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import useStyles from './styles';
import { InputProps } from './types';
import { EyeOffIcon, EyeOnIcon, LockIcon } from '../../../assets/icons';


const InputCustom: FunctionComponent<
  InputProps & TextInputProps & BaseIPProps
> = (props) => {
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
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        renderErrorMessage={false}
        placeholderTextColor={styles.placeHolder.color}
        

        {...props}
      />
    </TouchableNativeFeedback>
  );
};

export default InputCustom;
