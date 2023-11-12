import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  leftIconStyle: {
    marginRight: normalize(100),
    color: colors.black,
  },

  titleStyle: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(10),
  },
}));

export default useStyles;
