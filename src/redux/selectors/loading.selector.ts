import {RootState} from '../store';

export const getIsLoading = (state: RootState) => state.loading.isLoading;
export const getIsLoadingMain = (state: RootState) =>
  state.loading.isLoadingMain;
export const getIsLoadingPage = (state: RootState) =>
  state.loading.isLoadingPage;
export const getIsLoadingTopic = (state: RootState) =>
  state.loading.isLoadingTopic;

export const getIsLoadingStart = (state: RootState) =>
  state.loading.isLoadingStart;
