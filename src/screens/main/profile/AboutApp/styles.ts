import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,

    },
    View: {
        width: '90%',
        height: 90,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 24,
        borderColor: '#6F6969'
    },
    Name: {
        fontSize: normalize(HEIGHT * 0.04),
        fontWeight: 'bold',
        letterSpacing: normalize(0.5),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    colorBlack: {
        color: colors.black,

    },
    ViewTiltle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24
    },
    Text: {
        fontSize: normalize(HEIGHT * 0.025),
        fontWeight: 'bold',
        letterSpacing: normalize(0.5),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.grey5,
    }

}));
export default usestyles;