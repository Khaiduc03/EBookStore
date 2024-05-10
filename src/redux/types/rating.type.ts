import {uuid, Timestamp, PayloadHttpList} from '../../types';

export type RatingState = Partial<{
  listAllRating: PayloadHttpList<RatingType>;
  ratingChart: PayloadHttpListChart<RatingChart>;
}>;

export type RatingType = uuid &
  Timestamp & {
    rating: number;
    comment: string;
    comic_uuid: string;
    user_uuid: string;
    user_fullname: string;
    user_avatar: string;
    is_like: boolean;
    like_count: number;
  };

export interface PayloadHttpListChart<T> {
  code?: number;
  message?: string;
  data?: T;
}

export type RatingChart = {
  average_rating: number | undefined;
  total_rating: number | undefined;
  rating_1: number | undefined;
  rating_2: number | undefined;
  rating_3: number | undefined;
  rating_4: number | undefined;
  rating_5: number | undefined;
};
