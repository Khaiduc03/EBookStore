import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import {images} from '../../../../../../assets';
import {useAppDispatch} from '../../../../../../hooks';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
interface FollowerProps {
  data?: ItemFollowType;
}

const ItemListFollowing: React.FunctionComponent<FollowerProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  console.log('=============>', props.data);

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
        <TouchableOpacity
          onPress={() =>
            NavigationService.navigate(routes.PROFILEUSER, {
              dataFollow: props.data,
            })
          }>
          <FastImage
            style={styles.imgStyle}
            source={{
              uri:
                props.data?.image_url ||
                'https://static.thenounproject.com/png/5034901-200.png',
            }}
          />
        </TouchableOpacity>
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
          </View>
          <Text numberOfLines={1} style={styles.email}>
            {props.data?.email || 'Anonymous'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPressUnfollow}
        style={props.data?.is_follower ? styles.btn : styles.btnF}>
        <Text
          style={props.data?.is_follower ? styles.textBtn : styles.textBtnF}>
          {props.data?.is_follower ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListFollowing;
