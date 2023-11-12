import { ImageSourcePropType } from 'react-native';

export interface Post {
  id: string;
  name: string;
  images: ImageSourcePropType; 
  createAt: string;
  description: string;
  favoriteCount: number;
  commentCount: number;
}