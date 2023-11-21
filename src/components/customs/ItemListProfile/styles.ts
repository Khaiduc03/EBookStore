import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtCircle: {
    fontSize: normalize(20),
    letterSpacing: normalize(0.12),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
    marginStart: normalize(20),
  },
  rightIcon: {
    color: colors.black,
  },
  leftIcon: {
    color: colors.black,
  },
}));
export default useStyles;
