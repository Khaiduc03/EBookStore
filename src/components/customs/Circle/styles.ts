import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const usestyles = makeStyles(({ colors }) => ({
    ViewCircle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,

    },
    txtCircle: {
        fontSize: normalize(HEIGHT * 0.02),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
        paddingHorizontal: 24,
    },
    ViewCircleText: {
        flexDirection: 'row',
    },
    viewIcon: {
        left: 270,
        position: 'absolute',
    },
}));
export default usestyles;

