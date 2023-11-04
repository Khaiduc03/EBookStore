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
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(50),
  },
  searchContainer: {
    width: '65%',
    borderRadius: normalize(100),
    height: normalize(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(30),
    backgroundColor: colors.white,
    borderBottomWidth: normalize(5),
    borderColor: '#D9D9D9',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    height: '100%',
    paddingVertical: normalize(21),
  },
  post: {
    paddingHorizontal: normalize(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextPost: {
    width: '62%',
    marginStart: normalize(15),
  },
  viewIconPost: {
    flexDirection: 'row',
    gap: 13,
  },
  name: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  createAt: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    color: colors.grey8,
  },
  description: {
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(12),
  },
  textDescription: {
    fontSize: normalize(17),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
  },
  imagePost: {
    width: normalize(430),
    height: normalize(287),
  },
}));

export default useStyles;
