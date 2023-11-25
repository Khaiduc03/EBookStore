import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
  },
  content: {
    flexDirection: 'row',
    width: normalize(370),
  },
  numberRating: {
    color: colors.black,
    fontSize: normalize(35),
    fontFamily: fontFamilySetup.bold,
    textAlign: 'center',
  },
  starRating: {
    flexDirection: 'row',
    paddingVertical: normalize(10),
  },
  numberReviews: {
    color: colors.grey10,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    textAlign: 'center',
    marginTop: normalize(10),
  },
  line: {
    borderWidth: normalize(0.8),
    borderColor: colors.grey11,
    marginStart: normalize(10),
  },
  viewRating1: {
    paddingHorizontal: normalize(10),
  },
  viewRating2: {
    paddingHorizontal: normalize(30),
  },
  lineRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(3),
    gap: normalize(10),
  },
  numberLine: {
    color: colors.black,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    width: normalize(15),
  },
}));

export default useStyles;
