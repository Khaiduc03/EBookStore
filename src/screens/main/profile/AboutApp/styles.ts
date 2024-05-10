import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { fontFamilySetup } from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  viewTextBig: {
    width: normalize(WIDTH * 0.56),
    height: normalize(HEIGHT * 0.06),
    backgroundColor: colors.primary,
    borderRadius: normalize(12),
    marginHorizontal: normalize(24),
    marginVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: colors.whiteDefault,
    fontSize: normalize(WIDTH * 0.0639),
    fontFamily: fontFamilySetup.medium,
  },
  colorBlack: {
    color: colors.black,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(18),
  },
  text: {
    color: colors.grey5,
    fontSize: normalize(21),
    fontFamily: fontFamilySetup.bold,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  listContent: {
    flex: 1,
    marginHorizontal: normalize(12),
    paddingVertical: normalize(16),
  },
}));
export default useStyles;
