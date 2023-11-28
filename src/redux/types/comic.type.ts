import {uuid, Timestamp, image, PayloadHttpList} from '../../types';
import {TopicType} from './topic.type';

type ComicAllType = {
  data: ComicType[];
  totalData: number;
  totalPage: number;
  currentPage: string;
  canNext: boolean;
  currentDataSize: number;
};

export interface PayloadHttpListComics<T> {
  code?: number;
  message?: string;
  data?: ComicAllType;
}

export interface PayloadHttpListChapter<T> {
  data?: T[];
}

export interface PayloadHttpListTopView<T> {
  data?: T[];
}

export interface PayloadHttp<T> {
  code?: number;
  message?: string;
  data?: T;
}

export interface PayloadHttpListComicData<T> {
  totalData?: number;
  totalPage?: number;
  currentPage?: number;
  canNext?: boolean;
  currentDataSize?: number;
  data?: T[];
}

export interface PayloadHttpDetailChapter<T> {
  next_chapter?: string;
  previous_chapter?: string;
  data_chapter?: T[];
  totalComment?: number;
}

export type ComicState = Partial<{
  listData: PayloadHttpListComicData<ComicType>;
  listDataByTopic: PayloadHttpListComicData<ComicType>;
  listDataByTopicMore: PayloadHttpListComicData<ComicType>;
  listDataBySearch: PayloadHttpListComicData<ComicType>;
  topic: PayloadHttpList<TopicType>;
  detailData: PayloadHttpList<ComicDetailType>;
  listDetailChapter: PayloadHttpDetailChapter<DetailChapterType>;
  listChapter: PayloadHttpListChapter<ChapterType>;
  listTopView: PayloadHttpListTopView<ComicType>;
  dataPostFavorite: PayloadHttp<AddFavoriteType>;
  listFavorite: PayloadHttpListComicData<ComicType>;
  listHistoryComic: PayloadHttpListComicData<ComicType>;
}>;

export type ComicType = uuid &
  Timestamp & {
    comic_uuid: string;
    comic_name: string;
    isPublic: boolean;
    author: string;
    description: string;
    views: number;
    image_url: string;
    topics: string[];
    topic_names: string[];
    favorite_uuid: string;
    isfavorite: boolean;
    last_chapter_number: number;
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

export type AddFavoriteType = uuid &
  Timestamp & {
    user: string;
    comic: string;
  };

export type DetailChapterType = Timestamp & {
  chapter_uuid: string;
  public_id: string;
  url: string;
  secure_url: string;
  page: number;
  chapter: ChapterType;
};
