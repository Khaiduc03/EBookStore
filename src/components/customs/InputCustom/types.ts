import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type InputProps = {
  borderBottomColor?: string;
  placeholder?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  secure?: boolean;
  style?: ViewProps['style'];
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
};
