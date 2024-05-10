import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  Squares: {
    width: normalize(110),
    height: normalize(162),
    borderRadius: normalize(10),
    borderWidth: normalize(0.8),
    borderColor: '#D6D3D3',
    alignItems: 'center',
  },
  ViewTop: {
    paddingVertical: normalize(15),
  },
  Avatar: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  Button: {
    width: normalize(90),
    height: normalize(20),
    borderRadius: normalize(8),
    top: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextButton: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    color: colors.white,
  },
  title: {
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(15),
    color: colors.grey5,
  },
  name: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  iconDelete: {
    position: 'absolute',
    bottom: normalize(62),
    left: normalize(28),
  
  },
  
}));
export default useStyles;