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

  const onPressUnfollow = () => {
    dispatch(
      UserAction.postFollow(
        props.data?.user_follower_uuid ? props.data?.user_follower_uuid : '',
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
        <Text numberOfLines={1} style={styles.name}>
          {props.data?.fullname || 'Anonymous'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPressUnfollow}
        style={props.data?.is_following ? styles.btn : styles.btnF}>
        <Text
          style={props.data?.is_following ? styles.textBtn : styles.textBtnF}>
          {props.data?.is_following ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListFollow;
