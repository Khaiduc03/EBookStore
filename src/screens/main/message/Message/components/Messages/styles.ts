import {color} from '@rneui/base';
import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../utils/font';

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
  },
  profileImage: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(22),
  },
  bubble: {
    borderRadius: normalize(15),
    marginVertical: normalize(5),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(15),
    width: '100%',
    flexWrap: 'wrap',
  },
  viewText: {
    left: normalize(-14),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewImageTextChat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(19),
    left: normalize(10),
  },
  text1: {
    color: colors.grey4,
    fontWeight: 'bold',
    fontSize: normalize(10),
  },
  textM: {
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(16),
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  viewTime: {
    alignSelf: 'flex-end',
    marginBottom: normalize(22),
  },
  time: {
    fontSize: normalize(10),
    color: colors.grey4,
    top: normalize(3),
  },
  footer: {
    width: '100%',
    height: '9%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(10),
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    width: '60%',
    height: '8%',
    backgroundColor: colors.input1,
    borderColor: colors.grey4,
    borderWidth: normalize(1),
    borderRadius: normalize(20),
    left: normalize(40),
    paddingLeft: normalize(5),
  },
  btnAttach: {
    transform: [{rotate: '44deg'}],
    position: 'absolute',
    left: normalize(16),
  },
  btnCopy: {
    position: 'absolute',
    right: normalize(124),
  },
  btnCamera: {
    position: 'absolute',
    right: normalize(60),
  },
  btnMic: {
    position: 'absolute',
    right: normalize(12),
  },
}));

export default useStyles;
