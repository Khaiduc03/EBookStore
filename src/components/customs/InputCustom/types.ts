import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export type InputProps = {
  placeholder?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement ;
  secure?: boolean;
  style?: ViewProps['style'];
};
