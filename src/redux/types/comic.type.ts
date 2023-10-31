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
  data?: T[];
}

export interface PayloadHttpDetailChapter<T> {
  next_chapter?: string;
  previous_chapter?: string;
  data_chapter?: T[];
}

export type ComicState = Partial<{
  listData: PayloadHttpListComics<ComicType>;
  listDataByTopic: PayloadHttpList<ComicType>;
  listDataBySearch: PayloadHttpList<ComicType>;
  topic: PayloadHttpList<TopicType>;
  detailData: PayloadHttpList<ComicDetailType>;
  listDetailChapter: PayloadHttpDetailChapter<DetailChapterType>;
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
    topics: string[];
    favorite_uuid: string;
    isfavorite: boolean;
  };

export type ChapterType = uuid &
  Timestamp & {
    comic_uuid: string;
    chapter_name: string;
    chapter_number: string;
    views: string;
  };

export type DetailChapterType = Timestamp & {
  chapter_uuid: string;
  public_id: string;
  url: string;
  secure_url: string;
  page: number;
  chapter: ChapterType;
};
