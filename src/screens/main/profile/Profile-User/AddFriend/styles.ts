import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  btnAddUser: {
    width: normalize(45),
    height: normalize(28),
    borderRadius: normalize(8),
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    top: normalize(5),
  },
}));
export default useStyles;
