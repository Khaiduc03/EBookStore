import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';
import {color} from '@rneui/base';

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.backgrounDetai,
    paddingHorizontal: normalize(24),
    width: '100%',
  },

  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  dayCreat: {
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(16),
    lineHeight: normalize(20),
  },

  author: {
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(16),
    lineHeight: normalize(20),
  },
  nameComic: {
    color: colors.white,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(25),
    lineHeight: normalize(23),
  },
  imgComic: {
    height: Device.getDeviceHeight() * 0.22,
    width: Device.getDeviceWidth() * 0.31,
    borderRadius: 6,
  },

  topicsContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  content: {marginLeft: normalize(20), flex: 1},
  itemTopics: {
    backgroundColor: colors.secondary,
    marginRight: normalize(10),
    marginTop: normalize(10),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    borderRadius: 6,
  },

  textTopics: {
    fontSize: normalize(10),
    color: colors.grey1,
    textAlign: 'center',
  },

  interactContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(10),
  },
  interactItem: {
    alignItems: 'center',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberInteract: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
  },
  titleInteracItem: {
    color: colors.black,
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
  },
}));

export default useStyles;