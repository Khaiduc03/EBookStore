import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: normalize(15),
  },
  chapterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.black,
    padding: normalize(8),
    borderRadius: 10,
    marginBottom: normalize(10),
  },
  headerChapter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(10),
  },
  textHeader: {
    fontSize: normalize(16),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
  },
  textChapter: {
    fontSize: normalize(14),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
  },
}));

export default useStyles;
