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
  viewTextInput: {
    width: '100%',
    height: normalize(60),
    paddingVertical: normalize(9),
    paddingHorizontal: normalize(16),
    borderTopWidth: normalize(2),
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: '100%',
    height: normalize(39),
    paddingHorizontal: normalize(12),
    fontSize: normalize(14),
    borderRadius: normalize(12),
    backgroundColor: '#F1F1F3',
  },
}));

export default useStyles;
