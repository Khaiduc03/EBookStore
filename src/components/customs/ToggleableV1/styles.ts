import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    width: normalize(WIDTH * 0.91),
  },
  viewItem: {
    flexDirection: 'row',
    padding: normalize(12),
    alignItems: 'center',
    borderWidth: normalize(1),
    borderColor: '#ccc',
    borderRadius: normalize(10),
  },
  Name: {
    color: colors.black,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(0.2),
  },
  content: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.regular,
    letterSpacing: normalize(0.2),
    paddingVertical: normalize(10),
  },
  line: {
    borderColor: 'gray',
    borderBottomWidth: normalize(0.3),
    paddingVertical: normalize(5),
  },
}));
export default useStyles;
