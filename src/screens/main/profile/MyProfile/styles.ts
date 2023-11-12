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
  nameUser: {
    paddingHorizontal: normalize(24),
  },
  viewExplore: {
    paddingHorizontal: normalize(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    paddingVertical: 5,
  },
  textPost: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(20),
    color: colors.black,
    borderBottomWidth: 0.6,
  },
  viewMyPost: {
    borderColor: '#8a8a8a',
    marginTop: normalize(15),
    paddingHorizontal: normalize(24),
  },
  iconLeftStyle: {
    color: colors.black,
  },
  button: {
    width: normalize(144),
    height: normalize(38),
    borderRadius: 11,
    backgroundColor: colors.grey9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    flexDirection: 'row',
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
}));
export default useStyles;
