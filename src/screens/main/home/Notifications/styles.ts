import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    paddingHorizontal: normalize(12),
  },
  colorIconSetting: {
    color: colors.black,
  },
  viewItem: {
    padding: normalize(9),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewRowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 1,
  },
  viewCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewIcon: {
    width: normalize(WIDTH * 0.13),
    height: normalize(WIDTH * 0.13),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(100),
    marginEnd: normalize(12),
  },
  textTitle: {
    color: colors.black,
    fontSize: normalize(WIDTH * 0.043),
    fontFamily: fontFamilySetup.bold,
    marginBottom: normalize(6),
  },
  text: {
    color: colors.grey3,
    fontSize: normalize(WIDTH * 0.032),
    fontFamily: fontFamilySetup.medium,
  },
  viewText: {
    width: 'auto',
  },
  view: {
    width: normalize(2),
    height: normalize(16),
    backgroundColor: colors.grey3,
    marginHorizontal: normalize(12),
  },
  textDescription: {
    color: colors.colorDescription,
    fontSize: normalize(WIDTH * 0.036),
    fontFamily: fontFamilySetup.regular,
    letterSpacing: normalize(0.25),
  },
  outter: {
    width: normalize(53),
    height: normalize(26),
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
    width: normalize(18),
    height: normalize(18),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  innerON: {
    width: normalize(18),
    height: normalize(18),
    backgroundColor: colors.whiteDefault,
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  textSettings: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.25),
  },
  viewItemSettings: {
    marginLeft: normalize(16),
    marginTop: normalize(36),
    justifyContent: 'space-between',
  },
  viewStart: {
    marginLeft: normalize(16),
  },
  textHeader: {
    color: colors.black,
    fontSize: normalize(18.8),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(6),
  },
  marginTimeDate: {
    marginBottom: normalize(6),
  },
  marginTitle: {
    marginLeft: normalize(3),
  },
}));

export default useStyles;
