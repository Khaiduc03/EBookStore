import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(50),
  },
  content: {
    borderTopWidth: normalize(10),
    borderColor: colors.grey9,
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
    fontFamily: fontFamilySetup.regular,
    color: colors.grey8,
  },
  description: {
    padding: normalize(10),
  },
  textDescription: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
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
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  viewNumberCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    paddingVertical: normalize(10),
  },
}));

export default useStyles;
