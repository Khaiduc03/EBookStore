import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../utils';
import { fontFamilySetup } from '../../../utils/font';
import { Platform } from 'react-native';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
        color: '#27ae60',
    },





}));

export default useStyles;
