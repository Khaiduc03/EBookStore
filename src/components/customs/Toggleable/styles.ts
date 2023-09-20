import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 10
    },
    icon: {
        width: normalize(24),
        height: normalize(24),
    },
    Name: {
        fontSize: normalize(HEIGHT * 0.02),
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    content: {
        fontSize: normalize(HEIGHT * 0.02),
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
        paddingVertical: 10
    },
    line: {
        borderBottomWidth: 0.3,
        width: normalize(250),
        alignItems: 'center',
        borderColor: 'gray',
        paddingVertical: 5
    },
}))
export default useStyles
