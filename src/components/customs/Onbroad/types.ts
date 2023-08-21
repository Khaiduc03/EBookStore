import {ReactElement} from 'react';
import {ViewProps} from 'react-native';

export type OnbroadProps = {
  image: ReactElement;
  iconColor?: string[]
  title: string;
  subTitle: string;
  onPressBackButton?: () => void;
  onPressNextButton?: () => void;
  styles?: ViewProps['style'];
  textButton: string;
};
