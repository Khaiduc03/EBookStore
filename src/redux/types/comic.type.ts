import {type} from 'os';
import {uuid, Timestamp, image, PayloadHttpList} from '../../types';
import {TopicType} from './topic.type';

type ComicAllType = {
  data: ComicType[];
  totalData: string;
  totalPage: number;
  currentPage: string;
  canNext: boolean;
  currentDataSize: string;
};

export interface PayloadHttpListComics<T> {
  code?: number;
  message?: string;
  data?: ComicAllType;
}

export interface PayloadHttpListChapter<T> {
  code?: number;
  message?: string;
  chapter?: T[];
}

export type ComicState = Partial<{
  listData: PayloadHttpListComics<ComicType>;
  listDataByTopic: PayloadHttpList<ComicType>;
  listDataBySearch: PayloadHttpList<ComicType>;
  topic: PayloadHttpList<TopicType>;
  detailData: PayloadHttpList<ComicDetailType>;
  listDetailChapter: PayloadHttpList<DetailChapterType>;
  listChapter: PayloadHttpListChapter<ChapterType>;
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

export type ChapterType = uuid &
  Timestamp & {
    chapter_name: string;
    chapter_number: string;
    views: string;
  };

export type DetailChapterType = uuid &
  Timestamp & {
    public_id: string;
    url: string;
    secure_url: string;
    page: number;
    chapter: ChapterType;
  };
