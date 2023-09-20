import {color} from '@rneui/base';
import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

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
    borderRadius: normalize(20),
    marginHorizontal: normalize(10),
    marginVertical: normalize(5),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(15),
    maxWidth: normalize(250),
  },
  viewText: {
    left: normalize(-14),
  },
  viewRow: {
    flexDirection: 'row',
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
  text1: {
    color: colors.grey4,
    fontWeight: 'bold',
    fontSize: normalize(10),
  },
  textM: {
    color: colors.black,
    fontWeight: '400',
    fontSize: normalize(15),
  },
  viewTime: {
    alignSelf: 'flex-end',
    marginBottom: normalize(22),
  },
  time: {
    fontSize: normalize(10),
    color: colors.grey4,
    top: 3,
    right: normalize(12),
  },
  header: {
    width: '100%',
    height: normalize(60),
    paddingStart: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    width: '50%',
    height: normalize(40),
    backgroundColor: '#f2f2f2',
    borderColor: colors.grey4,
    borderWidth: normalize(1),
    borderRadius: normalize(20),
    marginHorizontal: normalize(10),
    paddingStart: normalize(10),
  },
  btnCall: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCallVideo: {
    width: normalize(44),
    height: normalize(44),
    right: normalize(16),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAttach: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '44deg'}],
  },
  btnCopy: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: normalize(110),
  },
  btnCamera: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMic: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
