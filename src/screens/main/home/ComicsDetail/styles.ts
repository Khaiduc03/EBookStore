import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  tabStyle: {
    backgroundColor: colors.grey1,
  },

  bottomSheetStyle: {
    backgroundColor: colors.background,
  },
  titleStyle: {
    color: colors.white,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
