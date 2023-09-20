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
    ScrollView: {
        maxWidth: '100%',
        maxHeight: 70,
        padding: normalize(10)
    },
    viewConten: {
        flexDirection: 'row',
    },
    viewSearch: {
        paddingHorizontal: normalize(20)
    },
    Toggleable: {
        paddingVertical: 10,
        paddingHorizontal: 24,

    },
    viewToggleable: {
        paddingVertical: 15
    }
}));
export default useStyles;