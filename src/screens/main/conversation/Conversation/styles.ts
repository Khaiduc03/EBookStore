import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

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
    backgroundColor: colors.background,
    marginHorizontal: normalize(16),
  },
  header: {
    // borderStartColor: colors.red,

    marginHorizontal: normalize(8),
  },
  headerWarpper: {
    borderBottomColor: colors.black,
    borderBottomWidth: 0.2,
    marginBottom: normalize(0.5),
  },

  listStyle: {
    marginTop: normalize(24),
    flex: 1,
  },

  textTitleHeader: {
    fontSize: normalize(24),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    marginLeft: normalize(4),
  },
  bodyNoData: {
    marginVertical: normalize(16),
  },
  imageNoData: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
}));

export default useStyles;
