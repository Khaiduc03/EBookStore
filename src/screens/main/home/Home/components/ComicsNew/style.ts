import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const useStyles = makeStyles(({colors}) => ({
  container: {
    alignItems: 'center',
  },
  comicItem: {
    width: '100%',
    height: normalize(180),
    flexDirection: 'row',
    marginBottom: normalize(15),
    paddingLeft: normalize(15),
  },
  imgComic: {
    width: Device.getDeviceWidth() * 0.28,
    height: '100%',
    borderRadius: normalize(6),
    marginRight: '2%',
  },
  content: {
    flex: 1,
  },
  topicsContainer: {
    flexDirection: 'row',
    width: '70%',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
