/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { TopNavigator } from './src/navigation/navigators/';
import React from 'react';
AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      {/* <TopNavigator /> */}
    </PersistGate>
  </Provider>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <TopNavigator />
  //   </PersistGate>
  // </Provider>
));

