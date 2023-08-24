import { combineReducers, configureStore } from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import { PersistConfig, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import { AppReducer, AuthReducer, LoadingReducer } from '../reducer';
import { AlertReducer } from '../reducer/alert.reducer';
import RootSaga from '../sagas';
import { Redux } from '../types/redux.type';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: EncryptedStorage, // storage is now required
  timeout: 30000, // timeout for storage calls, default is 10000
  version: 1, // version - defaults to 1
  debug: true, // enable logs - default is false
  stateReconciler: autoMergeLevel2,
  whitelist: [Redux.auth, Redux.app],
  blacklist: [Redux.loading],
};

const rootReducers = combineReducers({
  auth: AuthReducer,
  loading: LoadingReducer,
  app: AppReducer,
  alert: AlertReducer,
});
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

const createDebugger = require('redux-flipper').default;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, createDebugger()];
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // to ignore redux-persist
    }).concat(middleware),
});
sagaMiddleware.run(RootSaga);


export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
