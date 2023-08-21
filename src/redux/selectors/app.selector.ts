import { RootState } from '../store';

export const getAppIsReady = (state: RootState) => state.app.isReady;