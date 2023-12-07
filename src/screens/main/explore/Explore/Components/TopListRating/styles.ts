import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
  },
  textTitle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
}));

export default useStyles;
