import { NavigationContainer } from '@react-navigation/native';
import { makeStyles, useThemeMode } from '@rneui/themed';
import React from 'react';
import { useAppSelector } from '../hooks';
import { getAuthEnableSignIn } from '../redux/selectors/auth.selector';
import { getMode } from '../redux/selectors/thems.selector';
import { navigationRef } from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import Notification from '../screens/main/profile/Notification';






const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  //theme
  const mode = useAppSelector(getMode);
  const { setMode } = useThemeMode();
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <Notification />
    </NavigationContainer>
  );
};

export default RootNavigation;

const usestyles = makeStyles(({ colors }) => ({
  Mode: {
    backgroundColor: colors.background,
  },
}));
