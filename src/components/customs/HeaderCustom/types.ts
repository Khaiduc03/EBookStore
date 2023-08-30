import {TextStyle, ViewProps} from 'react-native';

type HeaderIcon = {
  name?: string;
  type?: string;
};

export type CustomHeaderProps = {
  title?: string; // Tiêu đề
  leftIcon?: HeaderIcon; // Icon bên trái
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  rightIconleft?: HeaderIcon; // Icon bên phảir
  rightIconRight?: HeaderIcon; // Icon bên phảir
  titleStyle?: TextStyle; // Kiểu dáng của tiêu đề
};
