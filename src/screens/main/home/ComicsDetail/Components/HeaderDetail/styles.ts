import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: HEIGHT * 0.35,
    justifyContent: 'space-around',
  },
  overLay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
  },

  content: {
    marginTop: normalize(16),
    flexDirection: 'row',
    marginHorizontal: normalize(16),
  },
  imageComic: {width: WIDTH * 0.3, height: HEIGHT * 0.2},

  contentContainer: {
    flex: 1,
    marginLeft: normalize(16),
  },
  dayCreat: {
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(16),
    lineHeight: normalize(25),
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
    lineHeight: normalize(30),
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
    justifyContent: 'space-around',
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
    color: colors.white,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(25),
    marginRight: normalize(5),
  },
  titleInteracItem: {
    color: colors.white,
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
  },
}));

export default useStyles;
