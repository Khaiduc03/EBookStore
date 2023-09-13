
import { ViewStyle } from 'react-native';
export type SearchBarComponentProps = {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  onPress?: () => void;
  value?: string;
  setValue?: (value: string) => void;
};

