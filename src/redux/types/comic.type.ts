import {type} from 'os';
import {uuid, Timestamp, image, PayloadHttpList} from '../../types';
import {TopicType} from './topic.type';
export interface PayloadHttpListComics<T> {
  code?: number;
  message?: string;
  comics?: T[];
}

export type ComicState = Partial<{
  listData: PayloadHttpListComics<ComicType>;
  listDataByTopic: PayloadHttpList<ComicType>;
  topic: PayloadHttpList<TopicType>;
  detailData: PayloadHttpList<ComicDetailType>;
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

export type ComicDetailType = uuid &
  Timestamp & {
    comic_name: string;
    isPublic: boolean;
    author: string;
    description: string;
    views: number;
    image_url: string;
    topicnames: string[];
    favorite_uuid: string;
    isfavorite: boolean;
  };
