import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
    paddingHorizontal: normalize(24),
  },

  iconLeftStyle: {
    color: colors.black,
  },
  viewText: {
    flexDirection: 'row',
    gap: normalize(20),
  },
  textName: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    paddingVertical: 20,
  },
  textInput: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(15),
    letterSpacing: normalize(1.5),
  },
  viewinput: {
    backgroundColor: colors.grey7,
    height: normalize(55),
    borderWidth: normalize(0.5),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
  },
  viewinputSmall: {
    backgroundColor: colors.grey7,
    height: normalize(45),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
    width: normalize(190),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputSmall: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    width: normalize(140),
    textAlign: 'center',
    letterSpacing: normalize(10),
    fontSize: normalize(18),
    marginTop: normalize(5),
  },
  viewinputSmallCCV: {
    backgroundColor: colors.grey7,
    height: normalize(45),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
    width: normalize(100),
  },
  textInputSmallCCV: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    width: normalize(80),
    textAlign: 'center',
    letterSpacing: normalize(10),
    fontSize: normalize(18),
    marginTop: normalize(5),
  },
  textError: {
    color: colors.red,
    marginTop: normalize(8),
  },
}));
export default useStyles;
