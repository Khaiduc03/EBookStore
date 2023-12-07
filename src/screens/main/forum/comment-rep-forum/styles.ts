import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  parentCommentStyle: {
    flexDirection: 'row',
    borderBottomWidth: 10,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(16),
    borderColor: '#F1F1F3',
  },
  inputStyle: {
    width: '100%',
    height: normalize(45),
    paddingHorizontal: normalize(15),
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    elevation: 5,
  },
  avatarStyle: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: 100,
    marginRight: normalize(10),
  },
  content: {
    flex: 1,
  },
  nameStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: colors.nameUserComment,
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
    color: colors.nameComment,
    lineHeight: normalize(18),
  },
  repContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: normalize(8),
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: normalize(60),
  },
  rep: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: normalize(60),
  },
  numberRepStyle: {
    paddingLeft: normalize(5),
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: '#A5A6AA',
  },
  iconStyleFocus: {
    color: colors.primary,
  },
  iconStyleBlur: {
    color: '#A5A6AA',
  },
  viewTextInput: {
    width: '100%',
    height: normalize(60),
    paddingVertical: normalize(9),
    paddingHorizontal: normalize(16),
    borderTopWidth: normalize(2),
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: '100%',
    height: normalize(39),
    paddingHorizontal: normalize(12),
    fontSize: normalize(14),
    borderRadius: normalize(12),
    backgroundColor: '#F1F1F3',
  },
}));

export default useStyles;
