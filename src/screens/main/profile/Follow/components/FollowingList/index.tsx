import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {
  getListFollower,
  getListFollowing,
} from '../../../../../../redux/selectors/user.selector';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import ItemListFollow from '../ItemListFollow';
import useStyles from './styles';
import ItemListFollowing from '../ItemListFollowing';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';

const FollowingList = () => {
  const dataFollwing = useAppSelector(getListFollowing);

  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    dispatch(UserAction.getListFollow());
    setRefreshing(false);
  }, []);

  const styles = useStyles();
  const RenderItem = ({item}: {item: ItemFollowType}) => (
    <ItemListFollowing data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        data={dataFollwing}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default FollowingList;
