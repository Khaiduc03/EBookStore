import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../../../../hooks';
import {
  getListFollower,
  getListFollowing,
} from '../../../../../../redux/selectors/user.selector';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import ItemListFollow from '../ItemListFollow';
import useStyles from './styles';
import ItemListFollowing from '../ItemListFollowing';

const FollowingList = () => {
  const dataFollwing = useAppSelector(getListFollowing);

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
      />
    </View>
  );
};

export default FollowingList;
