import {TextStyle, ViewProps, ViewStyle} from 'react-native';
import {TopicType} from '../../../redux';
import {ImageStyle} from 'react-native-fast-image';
export type CustomTopicsProps = {
  item: TopicType;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
};
