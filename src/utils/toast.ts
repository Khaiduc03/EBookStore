import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { ToastType } from '../types';

export const showToastError = (props:string) => {
  Toast.show({
    type: 'error',
    text1: 'Error!!',
    text2: props,
  });
}
export const showToastSuccess = (props:string) => {
  Toast.show({
    type: 'success',
    text1: 'Success!!',
    text2: props,
  });
}