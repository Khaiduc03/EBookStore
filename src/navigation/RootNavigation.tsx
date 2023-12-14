import {NavigationContainer} from '@react-navigation/native';
import {makeStyles, useThemeMode} from '@rneui/themed';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {getMode} from '../redux/selectors/thems.selector';
import {NavigationService, linking, navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {includes} from 'lodash';
import {ComicService} from '../redux';
import {routes} from '../constants';

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

  const handleDynamicLink = async (link: any) => {
    console.log('link', link);
    // Handle dynamic link inside your own application
    if (link.url.includes('comicverse2.page.link/V9Hh/comicdetail')) {
      console.log('hi');
      if (enableSignIn) {
        const uuid = link.url.split('comic_uuid=')[1];
        const {data} = await ComicService.getComicById(uuid);
        NavigationService.navigate(routes.COMICDETAIL, {data: data.data[0]});
      }
    }
  };

  useEffect(() => {
    dynamicLinks().getInitialLink().then(handleDynamicLink);
  }, []);

  useEffect(() => {
    console.log('hi');
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  const handleDynamicLink1 = async () => {
    const initialLink = await dynamicLinks().getInitialLink();

    if (initialLink) {
      // Xử lý thông tin từ liên kết động ở đây
      console.log('Initial link:', initialLink.url);
    }
    console.log('Initial link:', initialLink);

    const unsubscribe = dynamicLinks().onLink(link => {
      // Xử lý thông tin từ liên kết động ở đây khi ứng dụng đã mở
      console.log('Link opened:', link.url);
    });

    return () => unsubscribe(); // Hủy đăng ký lắng nghe khi component bị unmount
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <StatusBar
        animated={true}
        showHideTransition={'slide'}
        backgroundColor={usestyles().Mode.backgroundColor}
        barStyle={themeMode}
      />
      {/* <AppNavigator />  */}
      {/* <CreateNewPasswordScreen /> */}
      {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
      {/* <RatingComicScreen /> */}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;

const usestyles = makeStyles(({colors}) => ({
  Mode: {
    backgroundColor: colors.background,
  },
}));
