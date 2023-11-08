import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {ComicType} from '../../../../../../../../redux';

export type CustomComicProps = {
  data: ComicType;
  imageStyle?: any | null;
  viewStyle?: ViewStyle | null;
  contentStyle?: ViewStyle | null;
  index: number;
  topicStyle?: ViewStyle | null;
};
