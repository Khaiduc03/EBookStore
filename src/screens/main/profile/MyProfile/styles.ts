import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    Avatar: {
        width: 64,
        height: 64,
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
    ViewExplore: {
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    ViewSquares: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        gap: 20,
    }
}));
export default useStyles;