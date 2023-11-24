import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(20),
    gap: normalize(20),
  },
  avatar: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(50),
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(17),
    fontFamily: fontFamilySetup.bold,
  },
  description: {
    width: normalize(250),
    color: colors.black,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
  },
  detailMore: {
    color: colors.blue,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    borderBottomWidth: normalize(1),
    marginStart: normalize(5),
    borderColor: colors.blue,
  },
  footer: {
    paddingHorizontal: normalize(20),
    gap: normalize(5),
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    height: normalize(100),
    borderRadius: normalize(15),
    paddingHorizontal: normalize(12),
    borderColor: colors.black,
    color: colors.black,
  },
  viewstar: {
    paddingVertical: normalize(30),
  },
  star: {
    gap: normalize(20),
  },
  countText: {
    alignSelf: 'flex-end',
    marginRight: normalize(20),
    color: colors.black,
  },
}));

export default useStyles;
