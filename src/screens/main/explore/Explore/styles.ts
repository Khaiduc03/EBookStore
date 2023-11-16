import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));

export default useStyles;
