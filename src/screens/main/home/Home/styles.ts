import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: normalize(19),
  },
  textTitle: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,

    lineHeight: normalize(35.2),
    color: colors.black,
  },
}));

export default useStyles;
