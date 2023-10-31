import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: normalize(10),
  },
  chapterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#757171',
    padding: normalize(8),
    borderRadius: 10,
    marginTop: normalize(5),
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
    fontSize: normalize(12),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    paddingLeft: normalize(5),
  },
  textName: {
    fontSize: normalize(16),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
