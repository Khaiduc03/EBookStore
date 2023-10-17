import {TextStyle} from 'react-native';
import {ViewStyle} from 'react-native';

export type BigButtonProps = {
  onPressButton?: () => void;
  style?: ViewStyle;
  textButton: string;
  textStyle?: TextStyle;
};
