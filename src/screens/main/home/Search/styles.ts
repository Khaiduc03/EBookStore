import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
const WIDTH = Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(16),
    marginVertical: normalize(10),
  },
  iconBack: {
    width: normalize(20),
    marginRight: normalize(10),
  },
  search: {
    flex: 1,
  },
  textTitle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  comicItem: {
    height: normalize(135),
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: normalize(5),
    marginHorizontal: normalize(16),
  },
  imgComic: {
    width: WIDTH * 0.28,
    height: '100%',
    borderRadius: normalize(6),
    marginRight: '2%',
  },
  content: {
    flex: 1,
  },
  topicsContainer: {
    flexDirection: 'row',
    width: '70%',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
