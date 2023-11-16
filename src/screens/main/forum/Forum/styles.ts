import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  buttonHeader: {
    borderWidth: 0.4,
    borderRadius: normalize(50),
    width: '65%',
    height: normalize(46),
    borderColor: colors.grey4,
    justifyContent: 'center',
    paddingHorizontal: normalize(15),
  },
  textHeader: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(19),
    paddingVertical: normalize(10),
    alignItems:'center',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    height: '100%',
    paddingVertical: normalize(21),
    backgroundColor: colors.white,
  },
  post: {
    paddingHorizontal: normalize(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextPost: {
    width: '62%',
    marginStart: normalize(15),
  },
  viewIconPost: {
    flexDirection: 'row',
    gap: normalize(13),
  },
  name: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
  },
  createAt: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    color: colors.grey8,
  },
  description: {
    padding: normalize(10),
  },
  textDescription: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.5),
  },
  imagePost: {
    width: normalize(430),
    height: normalize(287),
  },
  iconText: {
    flexDirection: 'row',
    gap: normalize(10),
  },
  img_default: {
    width: normalize(36),
    height: normalize(36),
  },
}));

export default useStyles;
