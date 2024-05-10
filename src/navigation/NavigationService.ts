import React from 'react';

import {
  CommonActions,
  LinkingOptions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {routes} from '../constants';
import {Linking} from 'react-native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export class NavigationService {
  static navigate(name: string, params?: any, key?: string) {
    if (key) {
      navigationRef.current?.navigate({key, name, params});
      return;
    }
    navigationRef.current?.navigate(name, params);
  }

  static canGoBack() {
    return navigationRef.current?.canGoBack();
  }

  static goBack() {
    if (navigationRef.current?.canGoBack()) {
      navigationRef.current?.goBack();
    } else {
    }
  }

  static navigateAndReset(
    routes: {name: string; params?: any}[],
    index: number,
  ) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }

  static push(name: string, params?: any) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }

  static replace(name: string, params?: any) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }

  static popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }

  static pop(count?: number) {
    navigationRef.current?.dispatch(StackActions.pop(count));
  }

  static resetRoot(routes: {name: string; params?: any}[]) {
    navigationRef.current?.resetRoot({
      index: 0,
      routes,
    });
  }
  static resetScreen() {
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{name: routes.COMICDETAIL}],
    });

    navigationRef.current?.dispatch(resetAction);
  }
}

export const linking: LinkingOptions<any> = {
  prefixes: ['comicverse://', 'https://comicverse.fun'],
  config: {
    screens: {
      bottom_tab: {
        screens: {
          [routes.PROFILE]: 'profile',
          [routes.MESSAGE]: 'message',
          [routes.COMICDETAIL]: 'comicdetail',
          [routes.HOME]: 'home',
        },
      },
      [routes.COMICDETAIL]: 'comicdetail/:id',
    },
  },
};

// const linking1 = {
//   prefixes: ['myapp://', 'https://myapp.com'],

//   // Custom function to get the URL which was used to open the app
//   async getInitialURL() {
//     // First, you would need to get the initial URL from your third-party integration
//     // The exact usage depend on the third-party SDK you use
//     // For example, to get the initial URL for Firebase Dynamic Links:
//     const { isAvailable } = utils().playServicesAvailability;

//     if (isAvailable) {
//       const initialLink = await dynamicLinks().getInitialLink();

//       if (initialLink) {
//         return initialLink.url;
//       }
//     }

//     // As a fallback, you may want to do the default deep link handling
//     const url = await Linking.getInitialURL();

//     return url;
//   },

//   // Custom function to subscribe to incoming links
//   subscribe(listener) {
//     // Listen to incoming links from Firebase Dynamic Links
//     const unsubscribeFirebase = dynamicLinks().onLink(({ url }) => {
//       listener(url);
//     });

//     // Listen to incoming links from deep linking
//     const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
//       listener(url);
//     });

//     return () => {
//       // Clean up the event listeners
//       unsubscribeFirebase();
//       linkingSubscription.remove();
//     };
//   },

//   config: {
//     // Deep link configuration
//   },
// };
