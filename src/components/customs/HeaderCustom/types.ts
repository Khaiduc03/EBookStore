import {TextStyle, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};
export type ButtonProps = {
  onPress: () => void;
  icon?: {
    type: string;
    name: string;
    size?: number;
    color?: string;
  };
  title?: {
    text: string;
    size?: number;
    color?: string;
  };
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string; // Tiêu đề
  leftIcon?: HeaderIcon; // Icon bên trái
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  rightIconleft?: HeaderIcon; // Icon bên phảir
  rightIconMiddle?: HeaderIcon; // Icon bên phảir
  rightIconRight?: HeaderIcon; // Icon bên phảir
  titleStyle?: TextStyle; // Kiểu dáng của tiêu đề
  leftIconStyle?: ViewStyle;
  buttonProps?: ButtonProps;
};
