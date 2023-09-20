import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

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
  header: {
    width: '100%',
    height: normalize(60),
    paddingStart: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
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
  view3: {
    flex: normalize(1.6),
  },
  view4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(16),
  },
  view6: {
    position: 'absolute',
    left: normalize(12),
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
  textInput: {
    width: '100%',
    height: normalize(55),
    backgroundColor: colors.input1,
    borderRadius: normalize(16),
    paddingLeft: normalize(44),
    fontSize: normalize(18),
  },
  textName: {
    marginStart: normalize(10),
    color: colors.black,
    fontWeight: 'bold',
    fontSize: normalize(19),
  },
  textAuthor: {
    marginStart: normalize(10),
    color: colors.grey3,
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  text1: {
    marginStart: normalize(8),
    color: colors.grey4,
    fontWeight: 'bold',
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
  },
  btnComment: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSearch: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNotifications: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    top: normalize(2),
  },
}));

export default useStyles;
