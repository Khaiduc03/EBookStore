import React from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {routes} from '../../constants';
import {authScreen} from '../../screens/auth';
import {Screen} from '../../types';

import {useAppSelector} from '../../hooks';
import {getAppIsReady} from '../../redux/selectors/app.selector';

const isReady: boolean = useAppSelector(getAppIsReady);
const AuthStack = createStackNavigator();

const authScreenapp: Screen[] = [...authScreen];

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={screenOptions}
    //  initialRouteName={!isReady ? routes.ONBOARD : routes.LOBBY}
      initialRouteName={routes.UPDATE_PROFILE}
      >
      {authScreenapp.map(screen => {
        return (
          <AuthStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
