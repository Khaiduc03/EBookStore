import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  ViewCircle: {
    borderRadius: normalize(50),
    width: normalize(60),
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCircle: {
    fontSize: normalize(18),
    fontWeight: '700',
    letterSpacing: normalize(0.6),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(35.2),
    marginStart: normalize(20),
  },
  rightIcon: {
    color: colors.black,
  },
}));
export default useStyles;
