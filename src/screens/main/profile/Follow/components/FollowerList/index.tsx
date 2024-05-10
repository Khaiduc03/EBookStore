import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getListFollower} from '../../../../../../redux/selectors/user.selector';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import ItemListFollow from '../ItemListFollow';
import useStyles from './styles';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';

const FollowerList = () => {
  const dataFollwer = useAppSelector(getListFollower);
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    dispatch(UserAction.getListFollow());
    setRefreshing(false);
  }, []);
  const RenderItem = ({item}: {item: ItemFollowType}) => (
    <ItemListFollow data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={RenderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={item => item.uuid}
        data={dataFollwer}
      />
    </View>
  );
};

export default FollowerList;
