import {RootState} from '../store';

export const getAppIsReady = (state: RootState) => state.app.isReady;
export const getAppIsLoading = (state: RootState) => state.app.isLoading;
