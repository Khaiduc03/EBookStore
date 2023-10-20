import {ViewComponent, ViewProps} from 'react-native';

export type AuthProps = {
  title?: string;
  titleIcon?: boolean;
  subTitle?: string;
  titleComicverse?: string;
  avatar?: boolean;
  onPress?: () => void;
};
