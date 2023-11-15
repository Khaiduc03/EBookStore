import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imgStyle: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.6,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  cancelStyle: {
    position: 'absolute',
    right: normalize(10),
    top: normalize(10),
  },
  overLayStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
