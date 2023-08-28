import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {getMode} from '../redux/selectors/thems.selector';
import {useThemeMode} from '@rneui/themed';
import {StatusBar} from 'react-native';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  console.log(enableSignIn);
  //theme
  const mode = useAppSelector(getMode);
  const {setMode} = useThemeMode();
  React.useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>
      {mode === 'dark' ? (
        <StatusBar
          animated={true}
          showHideTransition={'slide'}
          backgroundColor={'#000'}
          barStyle={'light-content'}
        />
      ) : (
        <StatusBar
          animated={true}
          showHideTransition={'slide'}
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
        />
      )}
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
