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
  average_rating: number;
  total_rating: number;
  rating_1: number;
  rating_2: number;
  rating_3: number;
  rating_4: number;
  rating_5: number;
};
