import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';

Device.getDeviceWidth();
const useStyles = makeStyles(({ colors }) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: normalize(22),
        fontFamily: fontFamilySetup.bold,

        lineHeight: normalize(35.2),
        color: colors.black,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));
export default useStyles
