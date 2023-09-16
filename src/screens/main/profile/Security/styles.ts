import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    txt: {
        fontSize: normalize(HEIGHT * 0.021),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    view_switch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(20)
    },
    viewButton: {
        paddingVertical: 40
    }

}));
export default useStyles;