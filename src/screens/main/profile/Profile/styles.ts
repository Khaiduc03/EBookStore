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
  viewAvatar: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    flexDirection: 'row',
  },
  avatar: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: normalize(50),
  },
  btnMyProfile: {
    paddingHorizontal: normalize(15),
    justifyContent: 'center',
    width: '99%',
  },
  line: {
    borderBottomWidth: normalize(0.2),
    borderColor: 'gray',
    width: '95%',
    marginStart: normalize(10),
  },

  viewList: {
    flex: 1,
    marginTop: normalize(WIDTH * 0.03),
  },
  nameUser: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(19),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.22),
  },
  email: {
    color: colors.grey8,
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(15),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.15),
  },
}));

export default useStyles;
