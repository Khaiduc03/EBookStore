import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: normalize(100),
    height: normalize(160),
  },
  overLay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
  },

  content: {
    flex: 1,
    position: 'absolute',
    bottom: normalize(10),
    left: normalize(5),
  },
  nameComic: {
    fontSize: normalize(15),
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
  },
  topic: {
    fontSize: normalize(12),
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
  },
}));

export default useStyles;
