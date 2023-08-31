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
import AvatarComponets from '../../../../components/customs/Avatar';




const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };

  {/* {<Button
          title={enableSignIn ? 'Logout' : 'Login'}
          onPress={() => { handleLogout() }} />} */}
  return (
    <View style={styles.container}>
      <Header
        logobook
        title='Hồ sơ của bạn'
        istitle
        menu />
      <Circle_Avatar user='Drake Kun' email='drake@gmail.com' />

      <View style={styles.viewLine}>
        <View style={styles.line}></View>
      </View>
      <ScrollView style={styles.viewCircle}>
        <TouchableOpacity>
          <Circle_Wallet title='Phương thức thành toán ' icEdit />
        </TouchableOpacity>
        <View style={styles.viewLine}>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity>
          <Circle_Notification title='Thông báo ' icContinue />
        </TouchableOpacity>
        <TouchableOpacity>
          <Circle_Security title='Bảo mật' icContinue />
        </TouchableOpacity>
        <TouchableOpacity>
          <Circle_VIP title='Trở thành VIP' icContinue />
        </TouchableOpacity>
        <View style={styles.viewLine}>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity>
          <Circle_HelpCenter title='Trung tâm hỗ trợ' icContinue />
        </TouchableOpacity>
        <TouchableOpacity>
          <Circle_AboutApp title='Thông tin về app' icContinue />
        </TouchableOpacity>
        {<TouchableOpacity onPress={() => { handleLogout() }}>
          <Circle_Logout title={enableSignIn ? 'Đăng xuất' : 'Đăng nhập'} />
        </TouchableOpacity>}
      </ScrollView>


    </View>
  );
};

export default Profile;
