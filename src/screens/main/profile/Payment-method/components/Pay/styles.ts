import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  payment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(24),
  },
  icon: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  textName: {
    fontSize: normalize(18),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  textConnect: {
    fontSize: normalize(17),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
