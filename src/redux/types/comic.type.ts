import {uuid, Timestamp, image, PayloadHttpList} from '../../types';
import {TopicType} from './topic.type';
export interface PayloadHttpListComics<T> {
  code?: number;
  message?: string;
  comics?: T[];
}

export type ComicState = Partial<{
  listData: PayloadHttpListComics<ComicType>;
  topic: PayloadHttpList<TopicType>;
}>;

export type ComicType = uuid &
  Timestamp & {
    comic_name: string;
    isPublic: boolean;
    author: string;
    description: string;
    views: number;
    image_url: string;
    topics: string[];
  };
