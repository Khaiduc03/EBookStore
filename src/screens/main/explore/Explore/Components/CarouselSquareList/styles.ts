import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewCenter: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageContainer: {
    borderRadius: normalize(34),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(18),
    color: colors.white,
    marginVertical: normalize(6),
  },
  category: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(14),
    color: colors.red,
    marginVertical: normalize(2),
  },
}));

export default useStyles;
