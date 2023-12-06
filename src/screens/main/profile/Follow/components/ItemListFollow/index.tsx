import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import {images} from '../../../../../../assets';
import {useAppDispatch} from '../../../../../../hooks';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';
interface FollowerProps {
  data?: ItemFollowType;
}

const ItemListFollow: React.FunctionComponent<FollowerProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const onPressDelete = () => {
    dispatch(
      UserAction.postFollow(
        props.data?.user_following_uuid ? props.data?.user_following_uuid : '',
      ),
    );
  };

  const onPressFollow = () => {
    dispatch(
      UserAction.postFollow(
        props.data?.user_following_uuid ? props.data?.user_following_uuid : '',
      ),
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FastImage
          style={styles.imgStyle}
          source={{
            uri:
              props.data?.image_url ||
              'https://static.thenounproject.com/png/5034901-200.png',
          }}
        />
        <View style={styles.nameContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text numberOfLines={1} style={styles.name}>
              {props.data?.fullname || 'Anonymous'}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.dotStyle} />
              <TouchableOpacity onPress={onPressFollow}>
                <Text style={styles.textFollow}>
                  {props.data?.is_following ? 'Unfollow' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.email}>
            {props.data?.email || 'Anonymous'}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPressDelete} style={styles.btn}>
        <Text style={styles.textBtn}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListFollow;
