import {NavigationContainer} from '@react-navigation/native';
import {makeStyles, useThemeMode} from '@rneui/themed';
import React from 'react';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {getMode} from '../redux/selectors/thems.selector';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import CreatePost from '../screens/main/forum/create-post';

const RootNavigation = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  //theme
  const mode = useAppSelector(getMode);
  const {setMode} = useThemeMode();
  const [themeMode, setThemeMode] = React.useState<
    'dark-content' | 'light-content'
  >(() => {
    return mode === 'dark' ? 'dark-content' : 'light-content';
  });

  React.useEffect(() => {
    setMode(mode);
    if (mode === 'dark') {
      setThemeMode('light-content');
    } else {
      setThemeMode('dark-content');
    }
  }, [mode]);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        animated={true}
        showHideTransition={'slide'}
        backgroundColor={usestyles().Mode.backgroundColor}
        barStyle={themeMode}
      />
      {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
      {/* <CreatePost /> */}
      {/* <Filters /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;

const usestyles = makeStyles(({colors}) => ({
  Mode: {
    backgroundColor: colors.background,
  },
}));
