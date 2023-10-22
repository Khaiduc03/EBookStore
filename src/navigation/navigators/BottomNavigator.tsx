import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Text, makeStyles, normalize} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {HomeImage} from '../../assets/svg';
import {routes} from '../../constants';
import {Chat, Explore, Home, Profile} from '../../screens/main';
import {Device} from '../../utils';

const BottomTabs = createBottomTabNavigator();

const WIDTH = Device.getDeviceWidth();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
};

const choseIcon = (route: routes) => {
  switch (route) {
    case routes.HOME:
      return 'Home';
    case routes.EXPLORE:
      return 'Explore';
    case routes.MESSAGE:
      return 'Message';
    case routes.PROFILE:
      return 'Profile';
    default:
      return 'Home';
  }
};

const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    height: normalize(56),
    backgroundColor: colors.background,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  box: {
    flex: 1,
    width: normalize(56),
    height: normalize(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
}));

const BottomNavigator: FunctionComponent = () => {
  const styles = useStyles();
  const Tab = ({navigation, descriptors, state}: BottomTabBarProps) => {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                merge: true,
              } as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.box}>
              {/* <Icon
                name={choseIcon(route.name as routes)}
                type="ionicon"
                color={isFocused ? '#F89300' : 'gray'}
                size={24}
              /> */}

              <HomeImage fill={isFocused ? '#F89300' : 'gray'} />

              <Text
                style={{
                  color: isFocused ? '#F89300' : 'gray',
                  fontSize: 10,
                  marginTop: 1,
                  textTransform: 'capitalize',
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}
      tabBar={(props: BottomTabBarProps) => <Tab {...props} />}>
      <BottomTabs.Screen name={routes.HOME} component={Home} />
      <BottomTabs.Screen name={routes.EXPLORE} component={Explore} />
      <BottomTabs.Screen name={routes.MESSAGE} component={Chat} />
      <BottomTabs.Screen name={routes.PROFILE} component={Profile} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
