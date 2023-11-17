import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.grey6,
  },
  body: {
    flex: 1,
    backgroundColor: colors.grey6,
    paddingHorizontal: normalize(16),
  },
  footer: {
    width: '100%',
    height: '8%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScrollView: {
    backgroundColor: colors.grey6,
  },
  viewRow: {
    flexDirection: 'row',
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
    backgroundColor: colors.bubbleUserBackground,
  },
  bubbleNotUser: {
    width: 'auto',
    maxWidth: normalize(600),
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    padding: normalize(12),
    flexWrap: 'wrap',
    backgroundColor: colors.bubbleNotUserBackground,
  },
  textUser: {
    width: 'auto',
    maxWidth: normalize(200),
    flexWrap: 'wrap',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(12),
    color: colors.background,
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
    color: colors.black,
  },
  textTimeNotUser: {
    marginLeft: normalize(WIDTH * 0.01),
    fontSize: normalize(8),
    fontFamily: fontFamilySetup.regular,
    marginBottom: normalize(18),
    color: colors.black,
  },
  iconBack: {
    color: colors.black,
  },
  iconCall: {
    color: colors.black,
  },
  iconVideocam: {
    color: colors.black,
  },
  viewClearAll: {
    width: '100%',
    alignItems: 'center',
    marginVertical: normalize(6),
  },
  btnArrowDown: {
    borderRadius: normalize(100),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: normalize(120),
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
    color: colors.red,
    textAlign: 'center',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(6),
    marginVertical: normalize(16),
  },
  rightIconLeft: {
    top: normalize(HEIGHT * 0.018),
    right: normalize(WIDTH * 0.002),
  },
  rightIconRight: {
    top: normalize(HEIGHT * 0.018),
    left: normalize(WIDTH * 0.05),
  },
  textInput: {
    width: '66%',
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(9),
    marginVertical: normalize(5),
  },
  textInputHeightAuto: {
    height: normalize(50),
  },
  textInputHeightAutoLimit: {
    height: '8%',
  },
  viewBlur: {
    width: '100%',
    height: '8%',
  },
  viewFocusSelectImage: {
    height: normalize(HEIGHT * 0.3),
  },
  viewEmoji: {
    width: '100%',
    height: '44%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnPB: {
    paddingBottom: normalize(36),
  },
  modalContainer: {
    width: '100%',
    height: '88%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  avatarContainer: {
    width: normalize(130),
    height: normalize(90),
    backgroundColor: 'rgba(256, 256, 256, 1)',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    paddingTop: normalize(16),
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(16),
  },
  textStyle: {
    fontSize: normalize(16),
    marginLeft: normalize(12),
    color: colors.blackDefault,
    fontFamily: fontFamilySetup.bold,
  },
  iconStyle: {
    backgroundColor: colors.grey5,
    padding: normalize(8),
    borderRadius: normalize(1000),
  },

  viewEmojis: {
    width: '100%',
    height: normalize(HEIGHT * 0.5),
    top: normalize(HEIGHT * 0.09),
    position: 'absolute',
  },
}));

export default useStyles;
