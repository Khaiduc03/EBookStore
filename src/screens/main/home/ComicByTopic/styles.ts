import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';
import {normalizeText} from '@rneui/base';

const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  leftIconStyle: {
    color: colors.black,
    marginRight: normalize(10),
  },
  titleHeaderStyle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
    color: colors.black,
  },
  comicItem: {
    height: normalize(135),
    width: WIDTH - 16 * 2,
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: normalize(5),
    marginHorizontal: normalize(16),
  },
  imgComic: {
    width: WIDTH * 0.28,
    height: '100%',
    borderRadius: normalize(6),
    marginRight: normalize(10),
  },
  content: {
    flex: 1,
  },
  topicsContainer: {
    flexDirection: 'row',
  },
}));

export default useStyles;
