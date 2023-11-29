import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
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
    paddingVertical: normalize(10),
  },
  content: {
    paddingHorizontal: normalize(6),
    borderWidth: 1,
  },
  input: {
    width: '100%',
    height: '30%',
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    color: colors.grey8,
    padding: normalize(10),
  },
  viewInput: {
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
    right: normalize(95),
    top: normalize(4.4),
  },
  buttonSelect: {
    backgroundColor: colors.primary,
    width: normalize(130),
    height: normalize(32),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  dropdownStyle: {
    borderRadius: normalize(0),
  },
  viewbackgroundColor: {
    backgroundColor: colors.grey6,
  },
  textButtonSelect: {
    color: colors.black,
    fontSize: normalize(14.4),
    fontFamily: fontFamilySetup.bold,
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
    width: normalize(126),
    height: normalize(32),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: normalize(9),
    borderRadius: normalize(6),
    backgroundColor: colors.primary,
    paddingHorizontal: normalize(10),
  },
  textbtnImage: {
    color: colors.black,
    fontSize: normalize(14.4),
    fontFamily: fontFamilySetup.bold,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
