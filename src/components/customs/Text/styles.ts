import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  Lighttext: {
    fontSize: normalize(HEIGHT * 0.02),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    color: colors.grey5,
    fontFamily: fontFamilySetup.regular,
  },
  Boldtext: {
    fontSize: normalize(HEIGHT * 0.024),
    letterSpacing: normalize(0.5),
    fontStyle: 'normal',
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
  },
  Primarytext: {
    fontSize: normalize(HEIGHT * 0.02),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    color: colors.primary,
    fontFamily: fontFamilySetup.primary,
  },
}));
export default useStyles;
