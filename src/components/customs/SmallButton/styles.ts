import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

const useStyles = makeStyles(({colors}) => ({
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    borderRadius: normalize(30),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(24),
   borderBlockColor: colors.grey4,
    borderWidth: StyleSheet.hairlineWidth,
  },
}));
export default useStyles;
