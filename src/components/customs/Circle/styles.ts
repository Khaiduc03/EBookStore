import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();


const usestyles = makeStyles(({ colors }) => ({
    ViewCircle: {
        borderRadius: 50,
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtCircle: {
        fontSize: normalize(18),
        fontWeight: '700',
        letterSpacing: normalize(0.2),
        fontStyle: 'normal',
        fontFamily: fontFamilySetup.bold,
        color: colors.black,
        lineHeight: normalize(35.2),
        marginStart: normalize(20)

    },
    rightIcon: {
        color: colors.black,
    },
}));
export default usestyles;

