import React, {FunctionComponent} from 'react';

import {View, Text, FlatList} from 'react-native';
import useStyles from './styles';
import {useAppSelector} from '../../../../../../../../hooks';
import {getListTopView} from '../../../../../../../../redux/selectors/comic.selector';
import ItemTopViewList from '../ItemTopViewList';

const TopViewList: FunctionComponent = () => {
  const styles = useStyles();
  const RenderItem = ({item, index}: any) => (
    <ItemTopViewList data={item} index={index} />
  );
  const data = useAppSelector(getListTopView);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopViewList;
