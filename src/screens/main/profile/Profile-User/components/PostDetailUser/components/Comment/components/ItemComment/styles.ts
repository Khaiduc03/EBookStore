import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../../../utils';
import {fontFamilySetup} from '../../../../../../../../../../utils/font';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    marginTop: normalize(20),
  },
  avatarStyle: {
    width: normalize(39),
    height: normalize(39),
    borderRadius: 100,
    marginRight: normalize(10),
  },
  content: {
    flex: 1,
  },
  nameStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: '#737479',
  },
  day: {
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
    color: '#9E9E9E',
    paddingVertical: normalize(5),
  },
  commentStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(18),
  },
  repContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(8),
  },
  rep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberRepStyle: {
    paddingLeft: normalize(5),
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: '#A5A6AA',
  },
  iconStyle: {
    color: '#A5A6AA',
  },
}));

export default useStyles;
