import React, { FunctionComponent, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Avatar, Button, Switch } from '@rneui/base';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthEnableSignIn } from '../../../../redux/selectors/auth.selector';
import { AuthActions } from '../../../../redux/reducer';
import Header from '../../../../components/customs/Headers';
import { images } from '../../../../assets/images/png/index';
import AvatarComponets from '../../../../components/customs/Avatar';
import { Icon } from '@rneui/themed';
import { Circle } from '../../../../components';




const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };

  return (
    <View style={styles.container}>
      <Header
        logobook
        title='Hồ sơ của bạn'
        istitle
        menu />
    <Avatar />
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#D1F1E4' ic_Wallet title='Phương thức thanh toán' icEdit />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#FFF2F3' ic_Notification title='Thông báo' icContinue />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#EDF9F1' ic_Security title='Bảo mật' icContinue />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#EDF9F1' ic_VIP title='Trở thành VIP' icContinue />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#EDF9F1' ic_HelpCenter title='Trung tâm trợ giúp' icContinue />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewCircle}>
        <Circle circleColor='#FFF7EB' ic_AboutApp title='Thông tin về App' icContinue />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { handleLogout() }}>
        <Circle circleColor='#FFF2F3' ic_LogOut title={enableSignIn ? 'Logout' : 'Login'} />
      </TouchableOpacity>


    </View>
  );
};

export default Profile;
