import {RootState} from '../store';

export const getIsLoading = (state: RootState) => state.loading.isLoading;
export const getIsLoadingMain = (state: RootState) =>
  state.loading.isLoadingMain;
