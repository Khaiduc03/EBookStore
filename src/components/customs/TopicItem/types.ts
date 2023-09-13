import {TextStyle, ViewProps, ViewStyle} from 'react-native';
export type CustomTopicsProps = {
  title?: string;
  image?: string;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  index: number;
};
