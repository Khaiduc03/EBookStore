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
  title?: string;
  titleStyle?: TextStyle;
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  onPressIconMiddle?: () => void;
  leftIcon?: HeaderIcon;
  rightIconleft?: HeaderIcon;
  rightIconMiddle?: HeaderIcon;
  rightIconRight?: HeaderIcon;
  iconMiddle?: HeaderIcon;
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;
};
