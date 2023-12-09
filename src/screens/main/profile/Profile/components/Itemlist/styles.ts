import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../utils';
import { fontFamilySetup } from '../../../../../../utils/font';

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
    fontSize: normalize(22),
  },
  textBtn: {
    color: colors.black,
    fontSize: normalize(WIDTH * 0.044),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.12),
    lineHeight: normalize(21),
    marginLeft: normalize(WIDTH * 0.044),
  },
  viewItemBtn: {
    width: (WIDTH * 0.9),
    height: normalize(HEIGHT * 0.06),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(WIDTH * 0.01),
  },
  viewIconLeftText: {
    width: normalize(WIDTH * 0.6),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  marginIconLeft: {
    marginLeft: normalize(WIDTH * 0.019),
  },
  viewBtn: {
    marginRight: normalize(WIDTH * 0.01),
  },
  outter: {
    width: normalize(WIDTH * 0.12),
    height: normalize(WIDTH * 0.036),
    borderRadius: normalize(15),
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(2),
  },
  off: {
    justifyContent: 'flex-start',
    backgroundColor: '#C8C8C878',
  },
  on: {
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
  },
  innerSunny: {
    backgroundColor: '#000000',
    borderRadius: normalize(100),
    padding: normalize(4.6),
  },
  innerDarkMode: {
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(100),
    padding: normalize(4.6),
  },
  colorIconDarkMode: {
    color: colors.blackDefault
  },
  colorIconSunny: {
    color: colors.whiteDefault
  }
}));

export default useStyles;
