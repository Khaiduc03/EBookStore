import {StyleSheet} from 'react-native';
import {Device} from '../../../utils';
import {makeStyles, normalize} from '@rneui/themed';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    paddingTop: normalize(20),
    height: HEIGHT,
    width: '100%',
    zIndex: 10000,
    position: 'absolute',
    backgroundColor: '#FFF',
    paddingHorizontal: normalize(16),
  },
  header: {
    width: '100%',
    height: 200,
  },
}));

export default useStyles;
