import {TextStyle, ViewProps, ViewStyle} from 'react-native';
export type SearchBarComponentProps = {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  onPress?: () => void;
  onPressSearchComic?: () => void;
  value?: string;
  setValue?: (value: string) => void;
  autoFocus?: boolean;
};
