import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: normalize(WIDTH * 0.88),
    height: normalize(44),
    paddingLeft: normalize(-20),
    marginBottom: normalize(10),
  },
  containerFocus: {
    width: normalize(WIDTH * 0.88),
    height: normalize(44),
    paddingLeft: normalize(-20),
    marginBottom: normalize(10),
  },
  inputContainer: {
    width: '100%',
    borderBottomWidth: normalize(0.5),
    borderColor: colors.primary,
  },
  inputContainerFocus: {
    width: '100%',
    borderBottomWidth: normalize(1),
    borderColor: colors.primary,
  },
  input: {
    width: '100%',
    paddingLeft: normalize(0),
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    letterSpacing: normalize(0.3),
    color: colors.black,
  },
  placeholderColor: {
    color: colors.grey2,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  leftIcon: {
    color: colors.primary,
  },
  errorStyle: {
    width: '100%',
    marginLeft: normalize(-1),
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.red,
    letterSpacing: normalize(0.3),
  },
}));

export default useStyles;
