import React, { FunctionComponent, useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Button, Switch } from '@rneui/base';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthEnableSignIn } from '../../../../redux/selectors/auth.selector';
import { AuthActions } from '../../../../redux/reducer';
import Header from '../../../../components/customs/Headers';
import { Circle_Wallet, Circle_Notification, Circle_Security, Circle_VIP, Circle_HelpCenter, Circle_AboutApp, Circle_Logout, Circle_Avatar } from '../../../../components/customs/Circle/index';
import { images } from '../../../../assets/images/png/index';




const Profile: FunctionComponent = () => {
  // const dispatch = useAppDispatch();
  // const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  // const handleLogout = () => {
  //   dispatch(AuthActions.handleLogout());
  // };
  {/* <Button
        title={enableSignIn ? 'Logout' : 'Login'}
        onPress={() => { handleLogout() }}
      /> */}
  return (
    <View style={styles.container}>
      <Header
        leftIcon
        title='Hồ sơ của bạn'
        istitle
        menu />
      <Circle_Avatar />
      <ScrollView style={styles.viewCircle}>
        <Circle_Wallet />
        <View style={styles.line}></View>
        <Circle_Notification />
        <Circle_Security />
        <Circle_VIP />
        <View style={styles.line}></View>
        <Circle_HelpCenter />
        <Circle_AboutApp />
        <Circle_Logout />
      </ScrollView>


    </View>
  );
};

export default Profile;
