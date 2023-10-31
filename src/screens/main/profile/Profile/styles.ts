import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
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
    paddingHorizontal: normalize(20),
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: normalize(0.4),
    borderColor: 'gray',
    width: '95%',
    marginStart: normalize(10),
  },

  viewList: {
    flex: 1,
  },
  nameUser: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
  },
  email: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
}));

export default useStyles;
