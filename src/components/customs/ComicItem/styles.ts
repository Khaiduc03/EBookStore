import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceHeight() * 0.45,
    width: Device.getDeviceWidth() * 0.45,
    marginRight: Device.getDeviceWidth() * 0.018,
    marginBottom: Device.getDeviceWidth() * 0.018,
  },
  imgComic: {
    height: Device.getDeviceHeight() * 0.306,
    width: Device.getDeviceWidth() * 0.432,
    borderRadius: 10,
  },
  content: {
    width: '100%',
  },
  nameTopic: {
    color: colors.grey4,
    fontSize: normalize(13),
    lineHeight: normalize(23),
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
}));

export default useStyles;
