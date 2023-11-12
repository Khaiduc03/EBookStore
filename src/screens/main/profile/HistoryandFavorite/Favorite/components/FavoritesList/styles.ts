import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginHorizontal: normalize(15),
  },
}));

export default useStyles;
