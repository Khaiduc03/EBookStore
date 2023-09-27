import {TextStyle, ViewProps} from 'react-native';

export type FooterIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type FooterImage = {
  uri?: string;
};

export type CustomFooterProps = {
  placeholder?: string;
  leftIcon?: FooterIcon; // Icon bên trái
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  rightIconleft?: FooterIcon; // Icon bên phải phía bên trái
  rightIconright?: FooterIcon; // Icon bên phải phía bên phải
  imageUri?: FooterImage;
};
