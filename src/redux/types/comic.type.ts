import {uuid, Timestamp, image, PayloadHttpList} from '../../types';

export type ComicState = Partial<{
  listData: PayloadHttpList<ComicType>;
}>;

export type ComicType = uuid &
  Timestamp & {
    comic_name: string;
    isPublic: boolean;
    author: string;
    description: string;
    views: number;
    image: image;
    topics: [];
  };
