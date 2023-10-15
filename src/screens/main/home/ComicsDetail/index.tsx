import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { TabViewItem } from '../../../../components';
import { useAppDispatch } from '../../../../hooks';
import { ComicActions } from '../../../../redux';
import { Episodes, Preview } from './Components';
import useStyles from './styles';

interface RouteParamsIdComic {
  uuid: string;
}

const ComicsDetail = () => {
  const dispath = useAppDispatch();
  const route = useRoute();
  const uuidComic = (route.params as RouteParamsIdComic).uuid;
  useEffect(() => {
    dispath(ComicActions.getDetailComic(uuidComic));
  }, []);

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TabViewItem screen1={<Episodes />} screen2={<Preview />} />
    </View>
  );
};
export default ComicsDetail;
