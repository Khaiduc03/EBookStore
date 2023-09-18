import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const useStyles = makeStyles(({ colors }) => ({
    Squares: {
        width: normalize(135),
        height: normalize(130),
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: '#D6D3D3',
        alignItems: 'center',
        marginStart: 20
    },
    Avatar: {
        width: normalize(64),
        height: normalize(64),
        borderRadius: normalize(50),
    },
    Button: {
        width: normalize(85),
        height: normalize(19),
        backgroundColor: '#0075FF',
        borderRadius: normalize(15),
        top: normalize(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextButton: {
        fontSize: normalize(14),
        fontFamily: fontFamilySetup.bold,
        color: colors.white,
    },
    title: {
        fontSize: normalize(14),
        fontFamily: fontFamilySetup.bold,
        lineHeight: normalize(15),
        color: colors.grey5,
    },
    name: {
        fontSize: normalize(17),
        fontFamily: fontFamilySetup.bold,
        color: colors.black,
    }
}))
export default useStyles
