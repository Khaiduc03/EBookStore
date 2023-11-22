import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  paginationContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: normalize(10),
    backgroundColor: colors.primary,
    marginHorizontal: normalize(10),
    borderRadius: normalize(5),
  },
}));

export default useStyles;
