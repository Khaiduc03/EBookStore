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
    paddingHorizontal: normalize(17),
    borderBottomWidth: normalize(0.4),
    paddingVertical: normalize(10),
    borderColor: colors.grey4,
  },
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(100),
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
    padding: normalize(15),
  },
  input: {
    fontSize: normalize(18),
    paddingVertical: normalize(10),
  },
  viewInput: {
    paddingVertical: normalize(10),

    marginTop: normalize(10),
  },
}));

export default useStyles;
