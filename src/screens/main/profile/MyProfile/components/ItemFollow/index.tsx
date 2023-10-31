import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import TextCustom from '../../../../../../components/customs/Text';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../../../../redux';

const ItemFollow = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  dispatch(AuthActions.getUserInfo());
  const {email, fullname, image_url} = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={{uri: `${image_url}`}} />
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Follower" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Follow" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Post" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemFollow;
