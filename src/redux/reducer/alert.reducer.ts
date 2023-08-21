import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AlertState} from '../types/alert.type';
import {Redux} from '../types';
import {images} from '../../assets';

const initialState: AlertState = {
  isShow: false,
  title: 'Notification',
  description: 'Can you accept this message?',
  onAccept: () => {},
  onCancel: () => {},
  imageTitle: images.success,
  isAccept: false,
  isCancel: false,

};

const reducer = createSlice({
  initialState,
  name: Redux.alert,
  reducers: {
    setDataAlert: (
      state: AlertState,
      action: PayloadAction<Partial<AlertState>>,
    ) => {
      state.isShow = true;
      state.title = action.payload.title || 'Notification';
      state.imageTitle = action.payload.imageTitle || undefined;
      state.isAccept = action.payload.isAccept || false;
      state.isCancel = action.payload.isCancel || false;
      (state.description =
        action.payload.description ||
        'Please insert description for this alert !!! 😡️'),
        (state.onAccept = action.payload.onAccept || (() => {}));
      state.onCancel = action.payload.onCancel || (() => {});
    },
    cleanDataAlert: (state: AlertState) => {
      state.isShow = false;
      state.title = '';
      state.description = '';
      state.onAccept = () => {};
      state.onCancel = () => {};
      state.imageTitle = undefined;
      state.isAccept = false;
      state.isCancel = false;
    },
  },
});

export const AlertReducer = reducer.reducer;
export const AlertActions = reducer.actions;
