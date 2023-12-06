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
  titleStyle: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  tabStyle: {
    backgroundColor: colors.grey1,
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.background,
  },

  indicatorStyle: {
    height: 3,
    backgroundColor: colors.primary,
  },
  titleStyleTab: {
    color: colors.grey5,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
