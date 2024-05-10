import {RootState} from '../../hooks';

export const getListRating = (state: RootState) =>
  state.rating.listAllRating?.data;

export const getChartRating = (state: RootState) =>
  state.rating.ratingChart?.data;
