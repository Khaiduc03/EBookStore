import { makeStyles, normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../../../../../utils/font';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    backgroundColor: colors.background,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
    marginStart: normalize(20),
    color: colors.blackDefault,
  },
  Button: {
    width: normalize(300),
    height: normalize(50),
    flexDirection: 'row',
    borderRadius: normalize(15),
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    borderWidth: normalize(0.5),
    marginVertical: normalize(16),
  },
}));
export default useStyles;