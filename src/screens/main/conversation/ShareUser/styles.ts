import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';
import {color} from '@rneui/base';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },

  input: {
    width: '100%',
    marginLeft: normalize(16),
    color: colors.black,
  },
  header: {
    marginTop: normalize(16),
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    alignItems: 'center',
    borderBottomColor: colors.grey6,
    paddingHorizontal: normalize(16),
    color: colors.black,
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowColor: colors.grey6,
    width: '100%',
  },
  textStyle: {
    marginLeft: normalize(18),
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(14),
    color: colors.grey5,
    marginVertical: normalize(16),
  },
}));

export default useStyles;
