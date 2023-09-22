import {TextStyle, ViewProps} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
};

export type HeaderImage = {
  uri?: string;
};

export type CustomHeaderProps = {
  title?: string; // Tiêu đề
  leftIcon?: HeaderIcon; // Icon bên trái
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  rightIconleft?: HeaderIcon; // Icon bên phải phía bên trái
  rightIconRight?: HeaderIcon; // Icon bên phải phía bên phải
  titleStyle?: TextStyle; // Kiểu dáng của tiêu đề
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;
};
