import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inputStyle: {
    width: '100%',
    height: normalize(45),
    paddingHorizontal: normalize(15),
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    elevation: 5,
  },
}));

export default useStyles;
