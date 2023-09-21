import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  Payment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  Icon: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: 50,
  },
  TextName: {
    fontSize: normalize(HEIGHT * 0.023),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  TextConnect: {
    fontSize: normalize(HEIGHT * 0.021),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
