import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getListRating} from '../../../../../../redux/selectors/rating.selector';
import {RatingType} from '../../../../../../redux/types/rating.type';
import moment from 'moment';
import {useRating} from '../../hook/useRating.hook';
import {getAuthUserProfile} from '../../../../../../redux';
import AwesomeAlert from 'react-native-awesome-alerts';

const ItemRatingStar = () => {
  const styles = useStyles();

  const user = useAppSelector(getAuthUserProfile);

  const {
    dataRating,
    displayedData,
    handleRatingClick,
    onPressLikeRating,
    selectedRating,
    setShowAlert,
    showAlert,
    onPressDeleteRating,
  } = useRating();

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
              {user.uuid == item.user_uuid ? (
                <Icon
                  onPress={() => onPressDeleteRating(item.uuid)}
                  name="close"
                  type="ionicon"
                  size={25}
                />
              ) : (
                <View />
              )}
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>{item.comment}</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.likeContainer}>
                <Icon
                  onPress={() => onPressLikeRating(item)}
                  activeOpacity={0.5}
                  name="heart"
                  type="ionicon"
                  size={20}
                  color={item.is_like ? '#F89300' : '#000'}
                />
                <Text style={styles.textLike}>{item.like_count}</Text>
              </View>

              <Text style={styles.createAt}>
                {moment(item.created_at).format('YYYY-MM-DD-HH:mm') + ''}
              </Text>
            </View>
            {/* <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title="Post rating 😕"
              message="Are you sure you want to post your rating?"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="No, cancel"
              cancelButtonColor="blue"
              confirmText="Yes, post"
              confirmButtonColor="red"
              onCancelPressed={() => {
                setShowAlert(false);
              }}
              onConfirmPressed={() => onPressDeleteRating(item.uuid)}
              titleStyle={styles.textTitleAlert}
              messageStyle={styles.textMessageAlert}
              cancelButtonTextStyle={styles.textCancelAlert}
              confirmButtonTextStyle={styles.textConfirmAlert}
            /> */}
          </View>
        )}
      />
    </View>
  );
};

export default ItemRatingStar;
