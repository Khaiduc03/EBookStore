import { makeStyles, normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../../utils/font';
import { Device } from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  name: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    marginVertical: normalize(12),
  },
  textInput: {
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    textAlignVertical: 'center',
  },
  viewinput: {
    backgroundColor: colors.grey7,
    height: normalize(HEIGHT * 0.056),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
  },
  viewinputbig: {
    backgroundColor: colors.grey7,
    height: normalize(149),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
  },
  viewbtn: {
    padding: normalize(20),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;