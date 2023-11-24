import {StyleSheet} from 'react-native';

import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: normalize(0),
  },
  viewTextInput: {
    width: '100%',
    height: normalize(69),
    paddingVertical: normalize(9),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  textInput: {
    width: '100%',
    height: normalize(49),
    paddingHorizontal: normalize(12),
    fontSize: normalize(16),
    borderWidth: normalize(0.6),
    borderRadius: normalize(12),
    backgroundColor: 'rgba(184, 184, 184, 0.63)',
  },
}));

export default useStyles;
