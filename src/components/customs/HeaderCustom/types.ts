import {TextStyle, ViewProps, ViewStyle} from 'react-native';

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

export type HeaderImage = {
  uri?: string;
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  leftIcon?: HeaderIcon;
  onPressLeftIcon?: () => void;
  onPressRightIconLeft?: () => void;
  onPressRightIconRight?: () => void;
  onPressRightIconMiddle?: () => void;
  rightIconleft?: HeaderIcon;
  rightIconMiddle?: HeaderIcon;
  rightIconRight?: HeaderIcon;
  imageUri?: HeaderImage;
  fullName?: string;
  userStatus?: string;

  leftIconStyle?: ViewStyle;
  buttonProps?: ButtonProps;
};
