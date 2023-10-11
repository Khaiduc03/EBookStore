import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(10),
    marginHorizontal: normalize(10),
  },
  backIcon: {
    color: colors.black,
  },
  search: {
    flex: 1,
    marginLeft: normalize(10),
  },
}));

export default useStyles;
