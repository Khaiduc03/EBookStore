import React, {FunctionComponent} from 'react';

import {View, Text, FlatList} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import ItemTopViewList from '../ItemTopViewList';
import {useAppSelector} from '../../../../../../hooks';
import {getListTopView} from '../../../../../../redux/selectors/comic.selector';

const TopViewList: FunctionComponent = () => {
  const styles = useStyles();
  const RenderItem = ({item}: any) => <ItemTopViewList data={item} />;
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
