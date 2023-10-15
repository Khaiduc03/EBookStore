import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: normalize(100),
  },
  imageContainer: {marginBottom: 20},
  imageComic: {width: '100%', height: normalize(110), borderRadius: 6},
  numberRanking: {
    position: 'absolute',
    bottom: -30,
    fontSize: normalize(40),
    fontWeight: 'bold',
    color: colors.black,
    textShadowColor: '#585858',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 1,
  },
  nameComic: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
  },
}));

export default useStyles;
