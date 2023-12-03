import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textTitle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  textTitleHeader: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  leftIconStyle: {
    marginRight: normalize(5),
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
    width: '100%',
    flexWrap: 'wrap',
  },
  columnStyle: {
    paddingHorizontal: normalize(16),
    gap: normalize(5),
  },
}));

export default useStyles;
