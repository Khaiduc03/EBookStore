import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textTitle: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,

    color: colors.black,
  },
}));

export default useStyles;