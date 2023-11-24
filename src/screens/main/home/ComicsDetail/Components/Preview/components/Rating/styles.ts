import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(10),
  },
  textRating: {
    color: colors.black,
    fontSize: normalize(24),
    fontFamily: fontFamilySetup.bold,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
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
    borderWidth: 1,
    borderColor: colors.grey11,
  },
  viewRating1: {
    paddingHorizontal: normalize(20),
  },
  viewRating2: {
    paddingHorizontal: normalize(10),
  },
  lineRating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(3),
    gap: normalize(10),
  },
  footer: {
    paddingTop: normalize(25),
    paddingVertical: normalize(10),
  },
  textTitle: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
  },
  numberLine: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    width: normalize(15),
  },
  star: {
    paddingTop: normalize(10),
  },
}));

export default useStyles;
