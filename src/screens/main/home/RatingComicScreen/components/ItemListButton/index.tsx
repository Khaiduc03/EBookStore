import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getListRating} from '../../../../../../redux/selectors/rating.selector';
import {RatingType} from '../../../../../../redux/types/rating.type';

const ItemRatingStar = () => {
  const dataRating = useAppSelector(getListRating);
  const styles = useStyles();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [displayedData, setDisplayedData] = useState<RatingType[]>(dataRating!);

  const handleRatingClick = (rating: number | null) => {
    setSelectedRating(rating);

    if (rating === null) {
      setDisplayedData(dataRating!);
    } else {
      const filteredData = dataRating!.filter(item => item.rating === rating);
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
        showsVerticalScrollIndicator={false}
        data={displayedData}
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
