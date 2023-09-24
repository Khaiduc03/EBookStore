import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';

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
    padding: normalize(24),
  },
  viewJA: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view0: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    left: normalize(16),
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    top: normalize(8),
    left: normalize(10),
  },
  viewImage: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(100),
    backgroundColor: '#cccccc',
  },
  item: {
    width: '100%',
    height: normalize(120),
    marginVertical: normalize(10),
    borderRadius: normalize(24),
    borderWidth: 1,
    borderColor: colors.black,
    justifyContent: 'center',
  },
  item1: {
    backgroundColor: colors.primary,
  },
  item2: {
    backgroundColor: colors.white,
  },
  textName: {
    marginStart: normalize(10),
    color: colors.black,
    fontSize: normalize(19),
    fontFamily: fontFamilySetup.bold,
  },
  textName1: {
    color: colors.white,
  },
  textName2: {
    color: colors.black,
  },
  textAuthor: {
    marginStart: normalize(10),
    color: colors.grey3,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
  },
  textAuthor1: {
    color: colors.input1,
  },
  textAuthor2: {
    color: colors.grey3,
  },
}));

export default useStyles;
