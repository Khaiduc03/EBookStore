import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
  },
  pdH: {
    paddingHorizontal: normalize(24),
    marginBottom: normalize(8),
  },
  pdHT: {
    paddingHorizontal: normalize(24),
  },
  flT: {
    marginTop: normalize(12),
  },
  colorIconHeader: {
    color: colors.primary,
  },
  viewHeaderText: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(18),
    color: colors.black,
    marginLeft: normalize(WIDTH * 0.056),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextTime: {
    width: normalize(250),
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  viewRowText: {
    flexDirection: 'row',
    width: '50%',
  },
  view0: {
    width: '96%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    marginTop: normalize(3),
  },
  viewItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(100),
    backgroundColor: colors.grey3,
    marginEnd: normalize(10),
  },
  item: {
    width: '100%',
    height: normalize(80),
    justifyContent: 'center',
  },
  textName: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
  textAuthor: {
    color: colors.grey3,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(9),
  },
  textFollow: {
    left: normalize(12),
    color: colors.grey3,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(9),
  },
  textTime: {
    left: normalize(15),
    color: colors.grey3,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(9),
  },
  iconStar: {
    color: colors.primary,
  },
}));

export default useStyles;
