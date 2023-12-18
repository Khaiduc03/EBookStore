import { ViewStyle } from "react-native";

export type ButtonLongProps = {
  title?: string;
  nameIcon?: string;
  colorIcon?: string;
  typeIcon?: string;
  onPressScreen?: () => void;
  backgroundColor?: ViewStyle;
};