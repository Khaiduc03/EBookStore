import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceHeight() * 0.306,
    width: (WIDTH - normalize(21) * 2) / 3,
    marginBottom: normalize(15),
  },
  imgComic: {
    width: '100%',
    height: Device.getDeviceHeight() * 0.2,
    borderRadius: 6,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  nameTopic: {
    color: colors.grey4,
    fontSize: normalize(10),
    lineHeight: normalize(18),
    fontFamily: fontFamilySetup.medium,
  },
  nameComic: {
    color: colors.black,
    fontSize: normalize(13),
    fontStyle: 'normal',
    lineHeight: normalize(20),
    fontFamily: fontFamilySetup.bold,
    textAlign: 'left',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textRate: {
    color: colors.grey4,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    marginLeft: normalize(5),
  },
  itemTopics: {
    backgroundColor: colors.backgroundTopic,
    marginRight: normalize(5),
    marginTop: normalize(5),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(5),
    borderRadius: 4,
  },
  textTopics: {
    fontSize: normalize(7),
    color: colors.black,
    textAlign: 'center',
    fontFamily: fontFamilySetup.medium,
  },
  skeletonStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
