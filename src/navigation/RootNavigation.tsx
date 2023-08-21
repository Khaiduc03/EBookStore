import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { useAppSelector } from '../hooks';
import { getAuthEnableSignIn } from '../redux/selectors/auth.selector';

const RootNavigation = () => {

  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn)
  return (
    <NavigationContainer ref={navigationRef}>
          {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
