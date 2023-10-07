import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginHorizontal: normalize(16),
    flex: 1,
  },
  comicItem: {
    height: normalize(135),
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: normalize(5),
  },
  imgComic: {
    width: WIDTH * 0.28,
    borderRadius: normalize(6),
    marginRight: '2%',
  },
  content: {
    flex: 1,
  },
  topicsContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
}));

export default useStyles;