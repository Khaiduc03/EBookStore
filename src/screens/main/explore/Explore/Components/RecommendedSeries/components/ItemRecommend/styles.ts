import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../../../utils/font';
import {color} from '@rneui/base';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: normalize(105),
    height: normalize(155),
  },
  overLay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
  },

  views: {
    width: normalize(25),
    height: normalize(25),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    top: normalize(5),
    left: normalize(5),
  },
  textViews: {
    fontSize: normalize(10),
    color: colors.primary,
    fontFamily: fontFamilySetup.bold,
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
