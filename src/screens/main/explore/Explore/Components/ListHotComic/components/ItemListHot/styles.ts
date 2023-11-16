import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../../../utils';
import {fontFamilySetup} from '../../../../../../../../utils/font';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
    paddingHorizontal: normalize(10),
  },
  textNumber: {
    fontSize: normalize(12),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
  },
  imageStyle: {
    height: normalize(45),
    width: normalize(50),
    borderRadius: 4,
  },
  content: {
    paddingLeft: normalize(10),
  },
  nameComic: {
    fontSize: normalize(12),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
  },
  topic: {
    paddingLeft: normalize(5),
    fontSize: normalize(10),
    color: colors.colorTextExplore,
    fontFamily: fontFamilySetup.medium,
  },
  textNumberOne: {
    fontSize: normalize(12),
    color: colors.white,
    fontFamily: fontFamilySetup.medium,
    position: 'absolute',
  },
  textContainer: {
    width: normalize(24),
    alignItems: 'center',
  },
}));

export default useStyles;
