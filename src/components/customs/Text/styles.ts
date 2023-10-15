import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  Lighttext: {
    fontSize: normalize(15),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    color: colors.grey5,
    fontFamily: fontFamilySetup.regular,
  },
  Boldtext: {
    fontSize: normalize(19),
    letterSpacing: normalize(0.5),
    fontStyle: 'normal',
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
  },
  Primarytext: {
    fontSize: normalize(12),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    color: colors.primary,
    fontFamily: fontFamilySetup.regular,
  },
}));
export default useStyles;
