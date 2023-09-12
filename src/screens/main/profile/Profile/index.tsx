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
import TextCustom from '../../../../components/customs/Text';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';




const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  const Navigate = () => {
    NavigationService.navigate(routes.SECURITY);
  }
  return (
    <View style={styles.container}>
      <Header
        logobook
        title='Hồ sơ của bạn'
        istitle
        menu />
      <View style={styles.viewAvatar}>
        <Circle circleColor='white' avatarDummy />
        <TouchableOpacity style={styles.viewText}>
          <TextCustom textBold title='Drake Kun' />
          <TextCustom textLight title='drake@gmail.com' />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.PAYMENTSMETHOD)}>
            <Circle circleColor='#D1F1E4' ic_Wallet title='Payment methods' icEdit />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.NOTIFICATION)}>
            <Circle circleColor='#FFF2F3' ic_Notification title='Notification' icContinue />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.SECURITY)}>
            <Circle circleColor='#EDF9F1' ic_Security title='Security' icContinue />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.BECOMEVIP)}>
            <Circle circleColor='#FFFDEA' ic_VIP title='Become a VIP member' icContinue />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.HELPCENTER)}>
            <Circle circleColor='#EDF9F1' ic_HelpCenter title='Help Center' icContinue />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewCircle} onPress={() => NavigationService.navigate(routes.ABOUTAPP)}>
            <Circle circleColor='#FFF7EB' ic_AboutApp title='About the App' icContinue />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { handleLogout() }}>
            <Circle circleColor='#FFF2F3' ic_LogOut title={enableSignIn ? 'Logout' : 'Login'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
