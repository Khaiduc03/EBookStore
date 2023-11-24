export interface RatingComicProps {
    uuid: string;
    rating: number;
    user_avatar: string;
    user_name: string;
    content: string;
    created_at: string;
    comic_uuid: string;
  }
  export const data = [
    {
      id: '1',
      user_uuid: 'user1',
      user_avatar:
        'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60',
      user_name: 'David Beckham',
      rating: 5,
      content: 'As a person who has a hard time picking up a book to read',
      created_at: '6 months ago',
    },
  ];
  