import {StyleSheet} from 'react-native';

import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
