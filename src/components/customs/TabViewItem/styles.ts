import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  containerTabView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleStyle: {
    color: colors.grey1,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
