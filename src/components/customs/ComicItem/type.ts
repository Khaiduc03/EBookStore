import {ImageStyle, ViewStyle} from 'react-native';

export type CustomComicProps = {
  id?: string;
  name?: string;
  topic?: string;
  rate?: string;
  image?: string;
  imageStyle?: ImageStyle | null;
  viewStyle?: ViewStyle | null;
  contentStyle?: ViewStyle | null;
};
