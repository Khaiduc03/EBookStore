import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon, Text, makeStyles, normalize} from '@rneui/themed';
import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import { routes } from '../../constants';
import { Device } from '../../utils';
import { Bookmark, Explore, Home, Profile } from '../../screens/main';

const BottomTabs = createBottomTabNavigator();

const WIDTH = Device.getDeviceWidth();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
};

const choseIcon = (route: routes) => {
  switch (route) {
    case routes.HOME:
      return 'home';
    case routes.EXPLORE:
      return 'id-card';
    case routes.BOOKMARK:
      return 'bookmarks';
    case routes.PROFILE:
      return 'person';
    default:
      return 'home';
  }
};

const useStyles = makeStyles(({ colors }) => ({
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
          const { options } = descriptors[route.key];
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
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.box}>
              <Icon
                name={choseIcon(route.name as routes)}
                type="ionicon"
                color={isFocused ? '#F89300' : 'gray'}
                size={24}
              />

              <Text
                style={{
                  color: isFocused ? '#F89300' : 'gray',
                  fontSize: 10,
                  marginTop: 1,
                }}>
                {route.name.toLowerCase()}
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
      <BottomTabs.Screen name={routes.BOOKMARK} component={Bookmark} />
      <BottomTabs.Screen name={routes.PROFILE} component={Profile} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
