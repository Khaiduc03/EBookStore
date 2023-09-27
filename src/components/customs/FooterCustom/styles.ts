import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: colors.white,
    padding: normalize(10),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewIconLeft: {
    justifyContent: 'center',
    transform: [{rotate: '40deg'}],
    marginHorizontal: normalize(12),
  },
  viewtextInput: {
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: normalize(6),
  },
  textInput: {
    width: normalize(246),
    height: normalize(40),
    paddingLeft: normalize(16),
    paddingRight: normalize(46),
    borderWidth: normalize(1),
    borderColor: colors.black,
    borderRadius: normalize(26),
  },
  leftIcon: {
    color: colors.black,
  },
  rightIcon: {
    color: colors.black,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  rightIconLeft: {
    position: 'absolute',
    alignSelf: 'center',
    left: normalize(-44),
  },
  rightIconRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(12),
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    marginLeft: normalize(20),
  },
  viewEmojiModal: {
    overflow: 'scroll',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  containerEmojiModal: {
    width: '100%',
    alignSelf: 'center',
    padding: normalize(12),
  },
  backGroundEmojiModal: {
    width: '100%',
    backgroundColor: colors.white,
  },
  searchEmojiModal: {
    alignSelf: 'center',
  },
  headerEmojiModal: {
    fontSize: normalize(26),
    alignSelf: 'center',
  },
  modalEmojiModal: {
    width: '100%',
  },
  emojiEmojiModal: {
    color: colors.colorIcon,
  },
  viewClearAll: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  textClearAll: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
    color: colors.clear,
  },
}));

export default useStyles;
