import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const useStyles = makeStyles(({ colors }) => ({
    Squares: {
        width: normalize(135),
        height: normalize(140),
        borderRadius: normalize(10),
        borderWidth: 0.8,
        borderColor: '#D6D3D3',
        alignItems: 'center',
        marginStart: normalize(20)
    },
    Avatar: {
        width: normalize(60),
        height: normalize(60),
        borderRadius: normalize(50),
    },
    Button: {
        width: normalize(85),
        height: normalize(25),
        backgroundColor: '#0075FF',
        borderRadius: normalize(8),
        top: normalize(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextButton: {
        fontSize: normalize(14),
        fontFamily: fontFamilySetup.bold,
        color: colors.white,
    },
    title: {
        fontSize: normalize(12),
        fontFamily: fontFamilySetup.bold,
        lineHeight: normalize(15),
        color: colors.grey5,
    },
    name: {
        fontSize: normalize(15),
        fontFamily: fontFamilySetup.bold,
        color: colors.black,
    }
}))
export default useStyles
