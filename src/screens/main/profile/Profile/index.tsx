import React, {FunctionComponent, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {Itemlish} from './components';
import {useDispatch} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../../redux';

const Profile: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  dispatch(AuthActions.getUserInfo());
  const {email, fullname, image_url} = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user', type: 'font-awesome'}}
        title="My profile"
      />
      <View style={styles.viewAvatar}>
        <Image source={{uri: `${image_url}`}} style={styles.avatar} />
        <TouchableOpacity
          style={styles.btnMyProfile}
          onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
          <Text style={styles.nameUser}>{fullname}</Text>
          <Text style={styles.email}>{email}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.viewList}>
        <Itemlish />
      </View>
    </View>
  );
};

export default Profile;
