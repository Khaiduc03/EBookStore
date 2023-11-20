import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(30),
  },
  textRating: {
    color: colors.black,
    fontSize: normalize(24),
    fontFamily: fontFamilySetup.bold,
  },
  content: {
    flexDirection: 'row',
  },
  numberRating: {
    color: colors.black,
    fontSize: normalize(40),
    fontFamily: fontFamilySetup.bold,
    textAlign: 'center',
  },
  starRating: {
    flexDirection: 'row',
    paddingVertical: normalize(10),
  },
  numberReviews: {
    color: colors.grey10,
    fontSize: normalize(16),
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
  footer:{
    paddingVertical: normalize(20)
  },
  starContainer:{
    backgroundColor:'red'
  }
}));

export default useStyles;
