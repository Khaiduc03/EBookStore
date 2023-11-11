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
  test: {
    color: colors.black,
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.medium,
  },
  viewRefesh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: normalize(5),
  },
  testContent: {
    color: colors.black,
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    marginStart: normalize(10),
  },
}));
export default useStyles;
