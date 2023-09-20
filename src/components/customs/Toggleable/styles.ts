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
        width: 24,
        height: 24,
    },
    Name: {
        fontSize: normalize(HEIGHT * 0.02),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    content: {
        color: '#000000',
        fontFamily: 'Urbanist',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.12,
        paddingVertical: 10
    },
    line: {
        borderBottomWidth: 0.8,
        width: 255,
        alignItems: 'center',
        borderColor: 'gray',
        paddingVertical: 5
    },
}))
export default useStyles
