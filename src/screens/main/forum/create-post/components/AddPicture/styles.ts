import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  iconLeftStyle: {
    color: colors.black,
  },

  buttonImage: {
    width: normalize(140),
    height: normalize(32),
    borderRadius: normalize(6),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
  },
  textbtnImage: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
  },
  viewStatus: {
    marginStart: normalize(20),
  },
  buttonClick: {
    flexDirection: 'row',
    gap: normalize(5),
  },
  selectedImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(10),
 
  },
}));

export default useStyles;
