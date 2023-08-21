import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type BigButtonProps = {
  onPressButton?: () => void;
  style?: ViewProps['style'];
  textButton: string;
};
