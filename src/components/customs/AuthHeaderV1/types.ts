import {ViewComponent, ViewProps} from 'react-native';

export type AuthProps = {
  title?: string;
  titleIcon?: boolean;
  subTitle?: string;
  titleComicverse?: string;
  avatar?: React.ReactNode;
  onPress?: () => void;
};
