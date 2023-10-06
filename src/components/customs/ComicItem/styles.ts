import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceHeight() * 0.306,
    width: (WIDTH - normalize(26) * 2) / 3,
  },
  imgComic: {
    width: '100%',
    height: Device.getDeviceHeight() * 0.18,
    borderRadius: 6,
  },
  content: {
    flex: 1,
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
}));

export default useStyles;
