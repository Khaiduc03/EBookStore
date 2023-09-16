import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    ScrollView: {
        maxWidth: '100%',
        maxHeight: 70,
        marginTop: 100
    },
    viewConten: {
        flexDirection: 'row',
    },
    viewSearch: {

    },
    Toggleable: {
        paddingVertical: 80,
        paddingHorizontal: 24,

    },
    viewToggleable: {
        paddingVertical: 15
    }
}));
export default useStyles;