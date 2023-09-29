import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e6e6e6',
  },
  body: {
    flex: 1,
    padding: normalize(24),
    paddingBottom: normalize(0),
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    marginEnd: normalize(6),
  },
  viewText: {
    left: normalize(-14),
  },
  viewRow: {
    flexDirection: 'row',
  },
  user: {
    alignItems: 'flex-end',
  },
  notuser: {
    alignItems: 'flex-start',
  },
  bubbleUser: {
    width: 'auto',
    maxWidth: normalize(600),
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    padding: normalize(12),
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    backgroundColor: '#20A090',
  },
  bubbleNotUser: {
    width: 'auto',
    maxWidth: normalize(600),
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    padding: normalize(12),
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    backgroundColor: '#F2F7FB',
  },
  textUser: {
    width: 'auto',
    maxWidth: normalize(200),
    flexWrap: 'wrap',
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(12),
  },
  textNotUser: {
    width: 'auto',
    maxWidth: normalize(200),
    flexWrap: 'wrap',
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(12),
  },
  viewTime: {
    width: 'auto',
  },
  textTimeUser: {
    fontSize: normalize(8),
    fontFamily: fontFamilySetup.regular,
    marginBottom: normalize(18),
    alignSelf: 'flex-end',
  },
  textTimeNotUser: {
    fontSize: normalize(8),
    fontFamily: fontFamilySetup.regular,
    marginBottom: normalize(18),
    alignSelf: 'flex-start',
  },
  iconBack: {
    color: colors.black,
  },
  iconEmoji: {
    flex: 1,
    color: colors.colorIcon,
    backgroundColor: colors.white,
  },
  viewBackgroundEmoji: {
    width: '100%',
    height: normalize(340),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewFooter: {
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewClearAll: {
    width: '100%',
    alignItems: 'center',
  },
  btnArrowDown: {
    borderRadius: normalize(100),
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: normalize(110),
    right: normalize(10),
    backgroundColor: colors.white,
  },
  btnClearAll: {
    width: normalize(80),
    backgroundColor: colors.white,
    marginBottom: normalize(6),
  },
  textClearAll: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
    color: colors.clear,
    textAlign: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rightIconLeft: {
    alignSelf: 'center',
    position: 'absolute',
    right: normalize(80),
  },
  rightIconRight: {
    alignSelf: 'center',
    marginHorizontal: normalize(18),
  },
  viewIconLeft: {
    transform: [{rotate: '40deg'}],
    alignSelf: 'center',
    marginHorizontal: normalize(16),
  },
  viewtextInput: {
    alignSelf: 'center',
    marginVertical: normalize(8),
  },
  textInput: {
    width: normalize(250),
    height: normalize(50),
    flexWrap: 'wrap',
    paddingLeft: normalize(16),
    paddingRight: normalize(46),
    borderWidth: normalize(1),
    borderColor: colors.black,
    borderRadius: normalize(26),
  },
  textInputHeightAuto: {
    height: normalize(50),
  },
  textInputHeightAutoLimit: {
    height: normalize(150),
  },
}));

export default useStyles;
