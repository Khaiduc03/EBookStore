import {StyleSheet} from 'react-native';
import {Device} from '../../../utils';
import {makeStyles, normalize} from '@rneui/themed';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: HEIGHT - normalize(56),
    width: '100%',
    zIndex: 10000,
    position: 'absolute',
    backgroundColor: colors.background,
  },
}));

export default useStyles;
