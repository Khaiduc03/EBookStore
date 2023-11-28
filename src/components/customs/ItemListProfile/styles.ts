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
  outter: {
    width: normalize(WIDTH * 0.12),
    height: normalize(WIDTH * 0.06),
    borderRadius: normalize(15),
    backgroundColor: colors.grey5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(2),
  },
  off: {
    justifyContent: 'flex-start',
    backgroundColor: '#C8C8C8',
  },
  on: {
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
  },
  innerOFF: {
    width: normalize(WIDTH * 0.044),
    height: normalize(WIDTH * 0.044),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  innerON: {
    width: normalize(WIDTH * 0.044),
    height: normalize(WIDTH * 0.044),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  viewBtn: {
    marginBottom: normalize(4),
  },
}));
export default useStyles;
