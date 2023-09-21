import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: normalize(24),
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: normalize(120),
    height: normalize(150),
    borderRadius: 15,
  },
  textContainer: {
    marginStart: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '62%',
    paddingVertical: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
}));

export default useStyles;
