import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

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
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.grey0,
  },
}));

export default usestyles;
