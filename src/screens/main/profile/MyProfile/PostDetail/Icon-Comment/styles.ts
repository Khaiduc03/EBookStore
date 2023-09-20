import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../utils';
import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const useStyles = makeStyles(({ colors }) => ({
    container: {

        backgroundColor: colors.background,
    },

}))
export default useStyles
