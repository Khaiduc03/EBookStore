import {ViewComponent, ViewStyle, TextStyle, ScrollView} from 'react-native';

export type CustomTabViewItemProps = {
  screen1: any;
  screen2: any;
  title1?: string;
  title2?: string;
  viewStyle?: ViewStyle;
  headerDetail?: any;
  tabStyle?: ViewStyle;
  titleStyle?: TextStyle;
  scrollRef?: React.RefObject<ScrollView>;
};
