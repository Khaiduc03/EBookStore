import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  Squares: {
    width: normalize(123),
    height: normalize(150),
    borderRadius: normalize(10),
    borderWidth: normalize(0.8),
    borderColor: '#D6D3D3',
    alignItems: 'center',
    marginStart: normalize(20),
  },
  ViewTop: {
    paddingVertical: normalize(8),
  },
  Avatar: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(50),
  },
  Button: {
    width: normalize(102),
    height: normalize(25),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(15),
  },
  TextButton: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.white,
  },
  title: {
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.bold,
    color: colors.grey5,
    letterSpacing: normalize(0.12),
  },
  name: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    letterSpacing: normalize(0.12),
    paddingHorizontal: normalize(3)
  },
  iconDelete: {
    position: 'absolute',
    bottom: normalize(40),
    left: normalize(33),
  },
}));
export default useStyles;
