import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { useAppSelector } from '../hooks';
import { getAuthEnableSignIn } from '../redux/selectors/auth.selector';
import Security from '../screens/main/profile/Security';
import Notification from '../screens/main/profile/Notification';
import FAQ from '../screens/main/profile/HelpCenter/FAQ';
import Contact_us from '../screens/main/profile/HelpCenter/Contact_us';
import Update_Profile from '../screens/main/profile/Update-profile';
import UpdateProfile from '../screens/auth/update-profile';
import MyProfile from '../screens/main/profile/MyProfile';







const RootNavigation = () => {

  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn)
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
