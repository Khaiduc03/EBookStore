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
    fontSize: normalize(18),
    letterSpacing: normalize(0.6),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    lineHeight: normalize(35.2),
    marginStart: normalize(10),
  },
  rightIcon: {
    color: colors.black,
  },
}));
export default useStyles;
