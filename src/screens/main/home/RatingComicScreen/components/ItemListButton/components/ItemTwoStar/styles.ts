import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  avatar: {
    width: normalize(53),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(10),
  },
  btnRating: {
    width: normalize(70),
    height: normalize(36),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(13),
  },
  textbtnRating: {
    fontSize: normalize(20),
    color: colors.primary,
    fontFamily: fontFamilySetup.bold,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(20),
  },
  description: {
    fontSize: normalize(14),
    color: colors.black,
    fontFamily: fontFamilySetup.regular,
    width: normalize(300),
  },
  footer: {
    flexDirection: 'row',
    padding: normalize(24),
    gap: normalize(20),
    alignItems:'center',
  },
  iconFooter: {
    color: colors.black,
  },
  createAt: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
  },
  countLike: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.regular,
  },
}));

export default useStyles;
