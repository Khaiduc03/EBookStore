import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { fontFamilySetup } from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabStyle: {
    backgroundColor: colors.blackDefault
  },
  titleStyle: {
    color: colors.primary,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
  },
  viewStyle: {
    width: normalize(WIDTH),
    height: normalize(HEIGHT),
    backgroundColor: colors.black,
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;