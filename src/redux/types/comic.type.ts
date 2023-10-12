import {uuid, Timestamp, image, PayloadHttpList} from '../../types';
import {TopicType} from './topic.type';

export type ComicState = Partial<{
  listData: PayloadHttpList<ComicType>;
  topic: PayloadHttpList<TopicType>;
}>;

export type ComicType = uuid &
  Timestamp & {
    comic_name: string;
    isPublic: boolean;
    author: string;
    description: string;
    views: number;
    image: image;
    topics: string[];
  };
