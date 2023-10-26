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
  iconLeftStyle: {
    color: colors.black,
  },
  tabStyle: {},
  titleStyle: {
    color: colors.primary,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
