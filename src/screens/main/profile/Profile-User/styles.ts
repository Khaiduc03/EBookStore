import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,

    },
    Avatar: {
        width: normalize(60),
        height: normalize(60),
        borderRadius: 50,
    },
    View: {
        paddingVertical: 24,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    viewFollow: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 10
    },
    NameUser: {
        paddingHorizontal: 24
    },
    TextPost: {
        fontSize: normalize(20),
        fontFamily: fontFamilySetup.bold,
        lineHeight: normalize(20),
        color: colors.black,
    },
    ViewMyPost: {
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: '#8a8a8a',
        marginTop: normalize(25),
    },
    ButtonFollow: {
        width: normalize(130),
        height: normalize(25),
        borderRadius: normalize(8),
        top: normalize(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
        backgroundColor: 'gray',

    },
    ViewButtonFollow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(24),
        paddingVertical: normalize(15),
        gap: normalize(10)
    },
    TextFollow: {
        fontSize: normalize(15),
        fontFamily: fontFamilySetup.bold,
        lineHeight: normalize(20),
        color: colors.white,
    },
    ButtonAddUser: {
        width: normalize(45),
        height: normalize(25),
        borderRadius: normalize(8),
        top: normalize(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
        backgroundColor: 'gray',
    }

}));
export default useStyles;