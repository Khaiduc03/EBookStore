import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    txt: {
        fontSize: normalize(HEIGHT * 0.028),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
        padding: 24
    },
    View: {
        flexDirection: 'row',
        paddingHorizontal: normalize(15),
        justifyContent: 'space-between',
        paddingVertical: normalize(15)
    },
    Text: {
        fontSize: normalize(HEIGHT * 0.02),
        fontWeight: 'bold',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Bold',
        color: colors.black,
    }
}));
export default usestyles;