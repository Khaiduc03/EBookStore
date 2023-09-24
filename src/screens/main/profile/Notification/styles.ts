import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  testNotify: {
    fontSize: normalize(20),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    padding: 24,
  },
}));
export default usestyles;
