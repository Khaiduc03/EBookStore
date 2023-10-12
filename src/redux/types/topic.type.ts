import {Timestamp} from 'react-native-reanimated';
import {uuid} from '../../types';
export type TopicType = uuid &
  Timestamp & {
    name: string;
    description: string;
    image_url: string;
    public_id: string;
  };
