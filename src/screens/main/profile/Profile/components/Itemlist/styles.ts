import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  line: {
    borderWidth: normalize(0.2),
    borderColor: 'gray',
  },
  viewList: {
    paddingHorizontal: normalize(18),
  },
  textName: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(20),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  iconList: {
    color: colors.black,
  },
  iconColor: {
    color: colors.grey3,
  },
  iconSize: {
    fontSize: normalize(WIDTH * 0.05),
  },
  textBtn: {
    color: colors.grey3,
    fontSize: normalize(WIDTH * 0.044),
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(0.12),
    lineHeight: normalize(21),
    marginLeft: normalize(WIDTH * 0.039),
  },
  viewItemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(WIDTH * 0.039),
  },
  viewIconLeftText: {
    width: normalize(WIDTH * 0.6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginIconLeft: {
    marginLeft: normalize(WIDTH * 0.019),
  },
  viewBtn: {
    marginRight: normalize(WIDTH * 0.01),
  },
  outter: {
    width: normalize(WIDTH * 0.12),
    height: normalize(WIDTH * 0.053),
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
    width: normalize(WIDTH * 0.04),
    height: normalize(WIDTH * 0.04),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  innerON: {
    width: normalize(WIDTH * 0.04),
    height: normalize(WIDTH * 0.04),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
}));

export default useStyles;
