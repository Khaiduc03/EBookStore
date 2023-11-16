import {makeStyles, normalize} from '@rneui/themed';
import {color} from '@rneui/base';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {flex: 1},
  tabStyle: {
    backgroundColor: colors.grey1,
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleStyle: {
    color: colors.primary,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.bold,
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.grey5,
  },
  leftIconStyle: {
    marginRight: normalize(100),
    color: colors.black,
  },
  titleStyleHeader: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(10),
  },
}));

export default useStyles;
