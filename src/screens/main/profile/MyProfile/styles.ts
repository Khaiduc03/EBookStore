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
  viewTextName: {
    paddingHorizontal: normalize(24),
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(18),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
    fontFamily: fontFamilySetup.bold,
  },
  viewExplore: {
    paddingHorizontal: normalize(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: normalize(40),
  },
  textPost: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(20),
    color: colors.black,
  },
  viewMyPost: {
    marginTop: normalize(15),
    paddingHorizontal: normalize(24),
  },
  iconLeftStyle: {
    color: colors.black,
  },
  button: {
    width: normalize(144),
    height: normalize(38),
    borderRadius: normalize(11),
    backgroundColor: colors.grey9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(15),
  },
  textButton: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
  },
  textDiscover: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(18),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(15),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  textBio: {
    color: colors.black3,
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(15),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
}));
export default useStyles;
