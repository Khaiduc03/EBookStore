import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {color} from '@rneui/base';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  leftIconStyle: {
    color: colors.black,
    marginRight: normalize(10),
  },
  content: {
    alignItems: 'center',
    paddingTop: normalize(20),
  },
  imgStyle: {
    height: normalize(95),
    width: normalize(95),
    borderRadius: 100,
  },
  name: {
    width: '100%',
    fontSize: normalize(25),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    paddingTop: normalize(10),
  },
  nameApp: {
    width: '100%',
    fontSize: normalize(20),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    paddingVertical: normalize(10),
  },
  title: {
    width: '100%',
    fontSize: normalize(15),
    color: colors.nameUserComment,
    fontFamily: fontFamilySetup.medium,
    paddingVertical: normalize(10),
  },
  textButton: {
    fontSize: normalize(18),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    paddingVertical: normalize(10),
  },
  buttonStyle: {
    marginTop: normalize(30),
    height: normalize(50),
    width: normalize(200),
    backgroundColor: colors.grey6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
}));

export default useStyles;
