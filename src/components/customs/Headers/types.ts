import {ReactElement} from 'react';

import {TextStyle, ViewProps} from 'react-native';

export type HeaderProps = {
  title?: string;
  leftIcon?: boolean;
  onPressLeftIcon?: () => void;
  rightIcon?: boolean;
  onPressRightIcon?: () => void;
  style?: ViewProps['style'];
  titleStyle?: TextStyle;
  logo?: boolean;
  iconColor?: string[]
};
