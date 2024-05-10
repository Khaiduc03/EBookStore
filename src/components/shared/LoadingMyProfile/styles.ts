import {StyleSheet} from 'react-native';
import {Device} from '../../../utils';
import {makeStyles, normalize} from '@rneui/themed';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: HEIGHT - WIDTH * 0.15,
    width: '100%',
    zIndex: 10000,
    backgroundColor: colors.background,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
}));

export default useStyles;
