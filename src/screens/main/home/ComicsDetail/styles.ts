import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));

export default useStyles;
