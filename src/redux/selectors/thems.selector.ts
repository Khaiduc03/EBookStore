import {RootState} from '../../hooks';

export const getMode = (state: RootState) => state.theme.mode;
