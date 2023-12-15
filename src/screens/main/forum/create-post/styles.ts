import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { fontFamilySetup } from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  header: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
  },
  viewBorder: {
    borderBottomWidth: normalize(0.3),
    borderColor: colors.grey4,
    marginHorizontal: normalize(12),
  },
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(100),
  },
  placeHolderColor: {
    color: colors.grey8,
  },
  icon: {
    color: colors.grey10,
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    width: '99%',
  },
  viewStatus: {
    marginStart: normalize(20),
  },
  buttonClick: {
    flexDirection: 'row',
    gap: normalize(5),
    marginVertical: normalize(9),
  },
  content: {
    paddingHorizontal: normalize(6),
    borderWidth: 1,
  },
  input: {
    width: '100%',
    height: normalize(HEIGHT * 0.3),
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    color: colors.grey8,
    padding: normalize(10),
    marginHorizontal: normalize(12),
  },
  selectedImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(10),
  },
  imageContainer: {
    width: normalize(100),
    height: normalize(100),
  },
  iconleft: {
    position: 'absolute',
    top: normalize(WIDTH * 0.0121),
    right: normalize(WIDTH * 0.212),
  },
  buttonSelect: {
    width: normalize(WIDTH * 0.3),
    height: normalize(HEIGHT * 0.039),
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  viewbackgroundColor: {
    backgroundColor: colors.grey6,
  },
  textButtonSelect: {
    color: colors.black,
    fontSize: normalize(13.3),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(WIDTH * 0.039),
  },
  textrowSelect: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
  },
  iconStatus: {
    color: colors.grey10,
  },
  buttonImage: {
    width: normalize(WIDTH * 0.3),
    height: normalize(HEIGHT * 0.039),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: normalize(13),
    borderRadius: normalize(6),
    backgroundColor: colors.primary,
    paddingHorizontal: normalize(10),
  },
  textbtnAddImage: {
    color: colors.black,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.bold,
    paddingHorizontal: normalize(6),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewImagesLength: {
    width: normalize(46),
    height: normalize(24),
    backgroundColor: colors.blackDefault,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(26),
    borderWidth: normalize(0.6),
    borderColor: colors.whiteDefault,
    position: 'absolute',
    top: normalize(16),
    right: normalize(16),
  },
  textImagesLength: {
    color: colors.whiteDefault,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
