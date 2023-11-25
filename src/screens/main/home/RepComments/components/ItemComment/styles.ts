import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    marginTop: normalize(25),
    paddingHorizontal: normalize(16),
  },
  avatarStyle: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: 100,
    marginRight: normalize(10),
  },
  content: {
    flex: 1,
  },
  nameStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: colors.nameUserComment,
  },
  day: {
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
    color: '#9E9E9E',
    paddingVertical: normalize(5),
  },
  commentStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.nameComment,
    lineHeight: normalize(18),
  },
  repContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: normalize(8),
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: normalize(60),
    padding: normalize(5),
  },
  rep: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(5),
    paddingRight: normalize(60),
  },
  numberRepStyle: {
    paddingLeft: normalize(5),
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: '#A5A6AA',
  },
  iconStyle: {
    color: '#A5A6AA',
  },
}));

export default useStyles;
