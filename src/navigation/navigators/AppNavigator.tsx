import React, {useEffect} from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';

import {routes} from '../../constants';
import {
  homeScreens,
  exploreScreens,
  forumScreens,
  messageScreens,
  profileScreens,
} from '../../screens/main';
import {Screen} from '../../types';
import {UserService} from '../../redux';
import {useAppDispatch} from '../../hooks';
import {ChatActions} from '../../redux/reducer/chat.reducer';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const mainScreens: Screen[] = [
  {
    name: routes.BOTTOM_TAB,
    component: BottomNavigator,
  },
  ...homeScreens,
  ...exploreScreens,
  ...forumScreens,
  ...messageScreens,
  ...profileScreens,
];

const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const getUser = async () => {
    const {data} = await UserService.getUserProfile();
    console.log('getUser');
    if (data.code === 200) {
      console.log('true1');
      return dispatch(ChatActions.handleGetStatus(true));
    }
    console.log('false2');
    return dispatch(ChatActions.handleGetStatus(false));
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <AppStack.Navigator
      screenOptions={screenOption}
      initialRouteName={routes.BOTTOM_TAB}>
      {mainScreens.map((screen: Screen) => {
        return (
          <AppStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
