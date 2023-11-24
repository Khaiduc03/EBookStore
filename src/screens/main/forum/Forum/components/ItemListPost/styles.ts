import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  image: {
    width: normalize(42),
    height: normalize(42),
    borderRadius: normalize(50),
  },
  imageTitle: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(50),
  },
  content: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-around',
    borderTopWidth: normalize(3),
    borderColor: colors.grey9,
    paddingTop: normalize(16),
    backgroundColor: colors.background,
  },
  post: {
    paddingHorizontal: normalize(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextPost: {
    width: '60%',
    marginStart: normalize(12),
  },
  viewIconPost: {
    flexDirection: 'row',
    gap: normalize(13),
  },
  marginTopDate: {
    marginTop: normalize(3),
  },
  name: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
  },
  textButtonHeader: {
    color: colors.black,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
  },
  createAt: {
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
    color: colors.grey8,
    marginEnd: normalize(6),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImageText: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  description: {
    padding: normalize(10),
    marginLeft: normalize(3),
  },
  textDescription: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
  imagePost: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  iconText: {
    flexDirection: 'row',
    gap: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerPost: {
    width: '100%',
    height: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  viewNumberCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.4,
    paddingVertical: normalize(10),
    borderColor: colors.grey8,
  },
  textLikeFocus: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.primary,
    lineHeight: normalize(21),
  },
  textLikeBlur: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
  wrapDot: {
    position: 'absolute',
    bottom: normalize(15),
    flexDirection: 'row',
    left: normalize(170),
    alignSelf: 'center',
  },
  dotActive: {
    margin: normalize(3),
    color: colors.whiteDefault,
    fontSize: normalize(20),
  },
  dot: {
    margin: normalize(3),
    fontSize: normalize(20),
    color: 'rgba(217, 217, 217, 0.38)',
  },
  header: {
    width: '100%',
    height: normalize(66),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonHeader: {
    width: '63%',
    height: normalize(39),
    borderWidth: normalize(0.4),
    borderRadius: normalize(50),
    borderColor: colors.grey4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(16),
  },
  textHeader: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  img_default: {
    width: normalize(36),
    height: normalize(36),
  },
  colorIconHeartBlur: {
    color: colors.black,
  },
  colorIconHeartFocus: {
    color: colors.primary,
  },
  iconLike: {
    width: normalize(21),
    height: normalize(21),
    borderRadius: normalize(100),
    backgroundColor: colors.primary,
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  imageAspect: {
    width: '100%',
    height: undefined,
    aspectRatio: normalize(16 / 9),
  },
  viewIconClose: {
    backgroundColor: colors.blackDefault,
    alignItems: 'flex-end',
  },
  iconClose: {
    position: 'relative',
    marginTop: normalize(10),
    marginRight: normalize(10),
    zIndex: normalize(1000),
  },
  viewModalImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackDefault,
  },
  viewImagesLengh: {
    width: normalize(46),
    height: normalize(24),
    backgroundColor: colors.blackDefault,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(26),
    borderWidth: normalize(0.6),
    borderColor: colors.whiteDefault,
    position: 'absolute',
    top: normalize(6),
    right: normalize(10),
  },
  textImagesLengh: {
    color: colors.whiteDefault,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
  viewLikeComment: {
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  iconFooter: {
    color: colors.black,
  },
}));

export default useStyles;
