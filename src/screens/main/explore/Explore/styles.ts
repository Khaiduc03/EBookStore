import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textTitleHeader: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  leftIconStyle: {
    marginRight: normalize(10),
  },
}));

export default useStyles;
