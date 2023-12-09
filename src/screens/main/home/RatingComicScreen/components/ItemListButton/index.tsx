import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import useStyles from './styles';
import {RatingComicProps} from './types';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getListRating} from '../../../../../../redux/selectors/rating.selector';

const ItemRatingStar: React.FC<RatingComicProps[]> = props => {
  const styles = useStyles();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [displayedData, setDisplayedData] = useState<RatingComicProps[]>(data);

  const dataRating = useAppSelector(getListRating);

  const handleRatingClick = (rating: number | null) => {
    setSelectedRating(rating);

    if (rating === null) {
      setDisplayedData(data);
    } else {
      const filteredData = data.filter(item => item.rating === rating);
      setDisplayedData(filteredData);
    }
  };

  return (
    <View style={styles.viewItem}>
      {/* Button */}
      <FlatList
        horizontal
        contentContainerStyle={{height: 50}}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        data={[null, 5, 4, 3, 2, 1]}
        keyExtractor={(item, index) =>
          item === null ? 'All' : item.toString()
        }
        renderItem={({item: rating}) => (
          <TouchableOpacity
            onPress={() => handleRatingClick(rating)}
            style={[
              styles.btnTitle,
              {
                backgroundColor:
                  selectedRating === rating
                    ? styles.backgroundBtnTitleFocus.backgroundColor
                    : styles.backgroundBtnTitleBlur.backgroundColor,
              },
            ]}>
            <View style={styles.btnNextScreen}>
              {rating !== null && (
                <Icon
                  name="star"
                  type="antdesign"
                  size={22}
                  color={selectedRating === rating ? 'white' : '#F89300'}
                />
              )}
              <Text
                style={[
                  styles.textTitle,
                  {
                    color:
                      selectedRating === rating
                        ? styles.colorsTextTitleFocus.color
                        : styles.colorsTextTitleBlur.color,
                  },
                ]}>
                {rating === null ? 'All' : rating}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Item in button */}

      <FlatList
        data={dataRating}
        keyExtractor={item => item.uuid}
        renderItem={({item}) => (
          <View key={item.uuid} style={styles.viewItem2}>
            <View style={styles.header}>
              <View style={styles.viewavt}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri:
                      item.user_avatar ||
                      'https://static.thenounproject.com/png/5034901-200.png',
                  }}
                />
                <Text style={styles.nameUser}>{item.user_fullname}</Text>
              </View>
              <View style={styles.numberStar}>
                <Icon
                  name="star"
                  type="antdesign"
                  color={'#F89300'}
                  size={22}
                />
                <Text style={styles.numberStarText}>{item.rating}</Text>
              </View>
              <Icon
                name="ellipsis-horizontal-circle-outline"
                type="ionicon"
                size={30}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>{item.comment}</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.createAt}>{item.created_at + ''}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ItemRatingStar;

export const data: RatingComicProps[] = [
  {
    uuid: '1',
    user_avatar:
      'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60',
    user_name: 'David Beckham',
    rating: 5,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '2',
    user_avatar:
      'https://media.baoquangninh.vn/upload/image/202309/medium/2122032_4265a4a6e7ba65752201d10852302e01.jpg',
    user_name: 'David De Gea',
    rating: 4,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '3',
    user_avatar:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
    user_name: 'David Thao',
    rating: 3,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '4',
    user_avatar:
      'https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/102023/14_2_20231017230847.jpg',
    user_name: 'David Huy',
    rating: 2,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '5',
    user_avatar:
      'https://toquoc.mediacdn.vn/280518851207290880/2023/11/14/cristiano-ronaldo-signs-for-al-n-16999414521651175458061.jpg',
    user_name: 'David Lam',
    rating: 1,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '6',
    user_avatar:
      'https://media.baoquangninh.vn/upload/image/202309/medium/2122032_4265a4a6e7ba65752201d10852302e01.jpg',
    user_name: 'David Thao',
    rating: 1,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '7',
    user_avatar:
      'https://media.baoquangninh.vn/upload/image/202309/medium/2122032_4265a4a6e7ba65752201d10852302e01.jpg',
    user_name: 'David Lam',
    rating: 2,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '8',
    user_avatar:
      'https://media.baoquangninh.vn/upload/image/202309/medium/2122032_4265a4a6e7ba65752201d10852302e01.jpg',
    user_name: 'David Lam',
    rating: 5,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
  {
    uuid: '9',
    user_avatar:
      'https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/102023/14_2_20231017230847.jpg',
    user_name: 'David Dat',
    rating: 5,
    content: 'As a person who has a hard time picking up a book to read',
    created_at: '6 months ago',
    comic_uuid: '123',
  },
];
