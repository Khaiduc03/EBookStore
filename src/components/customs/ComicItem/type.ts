import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Comic} from '../../../types';
import {ComicType} from '../../../redux';

export type CustomComicProps = {
  data: ComicType;
  imageStyle?: any | null;
  viewStyle?: ViewStyle | null;
  contentStyle?: ViewStyle | null;
  topicStyle?: ViewStyle | null;
};
