import {RootState} from '../store';
export const getListTopic = (state: RootState) => state.topic.topic?.data;
