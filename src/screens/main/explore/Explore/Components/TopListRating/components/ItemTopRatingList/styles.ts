import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: normalize(10),
  },
  textNumberOne: {
    fontSize: normalize(12),
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
    position: 'absolute',
  },
  textOne: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: normalize(20),
    left: normalize(20),
  },
  imgComic: {
    width: normalize(70),
    height: normalize(70),
    marginRight: '2%',
  },
  contentOne: {
    flex: 1,
    justifyContent: 'space-between',
  },
  oneContainer: {
    flexDirection: 'row',
    gap: normalize(10),
    paddingHorizontal: normalize(16),
    backgroundColor: colors.colorTopExplore,
    paddingVertical: normalize(20),
  },
  nameOne: {
    color: colors.black,
    fontSize: normalize(18),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
  desOne: {
    color: colors.grey8,
    fontSize: normalize(12),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.medium,
    lineHeight: normalize(18),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  imgOneStyle: {
    width: normalize(110),
    height: normalize(110),
    borderRadius: 6,
  },
  textNumberStyle: {
    lineHeight: normalize(25),
    color: colors.primary,
    fontSize: normalize(12),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.medium,
    paddingLeft: normalize(3),
  },
  content: {
    flex: 1,
  },

  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: normalize(10),
  },
  nameComic: {
    lineHeight: normalize(25),
    color: colors.black,
    fontSize: normalize(15),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.medium,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTop: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.medium,
    paddingHorizontal: normalize(10),
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
  textTopics: {
    fontSize: normalize(7),
    color: colors.black,
    textAlign: 'center',
    fontFamily: fontFamilySetup.medium,
  },
  itemTopics: {
    backgroundColor: colors.backgroundTopic,
    marginRight: normalize(5),
    marginTop: normalize(5),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(5),
    borderRadius: 4,
  },
  topicsContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
