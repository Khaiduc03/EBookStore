import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {getMode} from '../redux/selectors/thems.selector';
import {makeStyles, useThemeMode} from '@rneui/themed';
import {StatusBar} from 'react-native';
import { theme } from '../theme';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  //theme
  const mode = useAppSelector(getMode);
  const {setMode} = useThemeMode();
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>

        <StatusBar
          animated={true}
          showHideTransition={'slide'}
          backgroundColor={usestyles().Mode.backgroundColor}
          barStyle={'light-content'}
        />
   
      {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;


const usestyles = makeStyles(({colors}) => ({ 
  Mode:{
    backgroundColor:colors.background,
  }
}));
