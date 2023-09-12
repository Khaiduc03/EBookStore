import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const styles = StyleSheet.create({
    Squares: {
        width: 123,
        height: 125,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D6D3D3',
        alignItems: 'center',
    },
    Avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
    }
})
export default styles
