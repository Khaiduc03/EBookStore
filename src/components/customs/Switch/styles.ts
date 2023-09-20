import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: normalize(24),
        paddingVertical: normalize (15),
    },
    txt: {
        fontSize: normalize(HEIGHT * 0.019),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: 'Urbanist-Regular',
        color: colors.black,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));
export default useStyles
