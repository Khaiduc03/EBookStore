import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type InputProps = {
  placeholder?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  secure?: boolean;
  style?: ViewProps['style'];
  errorMessage?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
};
