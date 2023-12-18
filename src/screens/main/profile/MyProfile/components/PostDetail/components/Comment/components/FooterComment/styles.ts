import { StyleSheet } from 'react-native';

import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: normalize(0),
  },
  viewTextInput: {
    width: '100%',
    height: normalize(56),
    paddingVertical: normalize(9),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: '100%',
    height: normalize(39),
    paddingHorizontal: normalize(12),
    fontSize: normalize(14),
    borderRadius: normalize(12),
    backgroundColor: '#F1F1F3',
  },
}));

export default useStyles;
