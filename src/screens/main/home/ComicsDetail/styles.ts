import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.backgrounDetai,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  headerStyle: {
    backgroundColor: colors.backgrounDetai,
  },
}));

export default useStyles;
