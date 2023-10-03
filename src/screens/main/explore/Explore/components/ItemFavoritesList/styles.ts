import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    height: normalize(180),
    flexDirection: 'row',
    marginBottom: normalize(6),
    marginTop: normalize(10),
    marginHorizontal: normalize(15),
  },
  imgComic: {
    width: '36%',
    borderRadius: normalize(10),
    marginRight: '2%',
  },
  content: {
    width: '90%',
  },
  nameTopic: {
    color: colors.grey4,
    fontSize: normalize(13),
    lineHeight: normalize(20),
    fontFamily: fontFamilySetup.medium,
  },
  nameComic: {
    color: colors.black,
    fontSize: normalize(18),
    fontStyle: 'normal',
    lineHeight: normalize(25),
    fontFamily: fontFamilySetup.bold,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    color: colors.grey4,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.medium,
    marginLeft: normalize(5),
  },
  contentContainer: {
    width: '62%',
    flexDirection: 'row',
    height: '100%',
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
