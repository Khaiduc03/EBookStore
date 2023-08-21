import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon, Text} from '@rneui/themed';
import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {routes} from '../../constants';
import {Device} from '../../utils';
import {Bookmark, Explore, Home, Profile} from '../../screens/main';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    borderTopColor: '#CCC',
    borderTopWidth: 0.5,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  box: {
    flex: 1,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // borderRadius: WIDTH / 10,
  },
});

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

const BottomNavigator: FunctionComponent = () => {
  const Tab = ({navigation, descriptors, state}: BottomTabBarProps) => {
    const progressGrowth = useSharedValue(0);

    //use effect will call when change tab
    useEffect(() => {
      progressGrowth.value = withSpring(-20, {
        damping: 200,
        stiffness: 400,
      });

      // before change tab, reset progressGrowth
      return () => {
        progressGrowth.value = 0;
      };
    }, [state.index]);

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

          const animatedStyle = useAnimatedStyle(() => {
            const translateY = isFocused ? progressGrowth.value : 0;
            return {
              transform: [{translateY: translateY}],
            };
          }, []);

          return (
            <AnimatedTouch
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.box,
                animatedStyle,
                {
                  backgroundColor: isFocused ? '#1877F2' : 'white',
                },
              ]}>
              <Icon
                name={choseIcon(route.name as routes)}
                type="ionicon"
                color={isFocused ? 'white' : '#6396FF'}
                size={24}
              />

              <Text
                style={{
                  color: isFocused ? 'white' : '#6396FF',
                  fontSize: 10,
                  marginTop: 1,
                }}>
                {route.name.toLowerCase()}
              </Text>
            </AnimatedTouch>
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
