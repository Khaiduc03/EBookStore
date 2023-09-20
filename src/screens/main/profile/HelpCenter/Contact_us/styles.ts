import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,

    },
    Button_Service: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    Button_Facebook: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    Button_Website: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
}));
export default useStyles;