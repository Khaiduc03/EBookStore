import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Comic} from '../../../types';

export type CustomComicProps = {
  data: Comic;
  imageStyle?: any | null;
  viewStyle?: ViewStyle | null;
  contentStyle?: ViewStyle | null;
  index: number;
  topicStyle?: ViewStyle | null;
};
