import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';
import { Platform } from 'react-native';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
}));

export default useStyles;
