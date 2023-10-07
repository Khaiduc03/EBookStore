import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';
const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    height: normalize(140),
    flexDirection: 'row',
    marginTop: normalize(10),
  },
  imgComic: {
    width: '30%',
    marginRight: '2%',
  },
  content: {
    flex: 1,
  },
  nameTopic: {
    color: colors.grey4,
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
  },
  nameComic: {
    lineHeight: normalize(25),
    color: colors.black,
    fontSize: normalize(13),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    color: colors.grey4,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    marginLeft: normalize(5),
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ellipsiIcon: {
    width: '10%',
    justifyContent: 'center',
  },
  ellipsiIconStyle: {
    color: colors.black,
  },
}));

export default useStyles;
