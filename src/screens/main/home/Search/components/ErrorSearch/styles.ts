import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    height: normalize(250),
    width: normalize(250),
  },
}));

export default useStyles;
