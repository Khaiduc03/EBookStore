import {TextStyle, ViewProps, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type HeaderImage = {
  uri?: string;
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string; // Tiêu đề
  titleStyle?: TextStyle;
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  onPressIconMiddle?: () => void;
  leftIcon?: HeaderIcon; // Icon bên trái
  rightIconleft?: HeaderIcon; // Icon bên phải
  rightIconMiddle?: HeaderIcon; // Icon bên phải
  rightIconRight?: HeaderIcon; // Icon bên phải
  iconMiddle?: HeaderIcon;
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;
};
