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
    avatar: {
        width: normalize (60),
        height: normalize (60),
        borderRadius: 50,
    },
    viewAvatarFollow: {
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
    nameUser: {
        paddingHorizontal: 24
    },
    viewExplore: {
        paddingHorizontal: 24,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textPost: {
        fontSize: normalize(20),
        fontFamily: fontFamilySetup.bold,
        lineHeight: normalize(20),
        color: colors.black,
    },
    viewMyPost: {
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: '#8a8a8a',
        marginTop: 15,
    }

}));
export default useStyles;