import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type smallButtonProps = {
  onPressButton?: () => void;
  style?: ViewProps['style'];
  textButton?: string;
  nameIcon: string;
  typeIcon?: string;
  sizeIcon?: number;
  colorIcon?: string;
  isIonicons?: boolean;
  svgIcon?: ReactElement;
};
