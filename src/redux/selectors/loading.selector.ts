import {RootState} from '../store';

export const getIsLoading = (state: RootState) => state.loading.isLoading;
