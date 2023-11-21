import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textTitleHeader: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },

  leftIconStyle: {
    marginRight: normalize(5),
  },
  titleStyle: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
  },
  backgoundPopular: {
    width: '100%',
    height: normalize(HEIGHT * 0.5),
    backgroundColor: colors.black,
    paddingTop: normalize(39),
  },
}));

export default useStyles;
