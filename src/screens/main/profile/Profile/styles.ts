import { makeStyles } from '@rneui/themed';
import { fontFamilySetup } from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 26,
    fontFamily: fontFamilySetup.bold,
    color: colors.primary,
  },
}));

export default useStyles;
