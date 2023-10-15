import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  button: {
    borderRadius: normalize(99),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginVertical: normalize(HEIGHT * 0.01),
    width: '100%',
    height: normalize(HEIGHT * 0.058),
  },
  buttonText: {
    fontSize: normalize(HEIGHT * 0.02),
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
    color: colors.whiteDefault,
  },
}));

export default usestyles;
