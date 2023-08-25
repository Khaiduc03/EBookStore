import {StyleSheet} from 'react-native';
import {Device} from '../../../utils';
import {makeStyles, normalize} from '@rneui/themed';

const PADDING = 40;

const useStyles = makeStyles(({colors}) => ({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
  },
  container: {
    width: Device.getDeviceWidth() - PADDING * 2,
    height: Device.getDeviceHeight() / 4.3,
    backgroundColor: 'rgba(256, 256, 256, 2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
  lottieView: {
    width: normalize(400),
    height: normalize(200),
    position: 'absolute',
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',

    color: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 35,
  },
}));

export default useStyles;
