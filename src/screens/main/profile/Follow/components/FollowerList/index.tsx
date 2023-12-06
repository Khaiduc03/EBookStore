import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../../../../hooks';
import {getListFollower} from '../../../../../../redux/selectors/user.selector';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import ItemListFollow from '../ItemListFollow';
import useStyles from './styles';

const FollowerList = () => {
  const dataFollwer = useAppSelector(getListFollower);
  console.log(dataFollwer);
  const styles = useStyles();
  const RenderItem = ({item}: {item: ItemFollowType}) => (
    <ItemListFollow data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid}
        data={dataFollwer}
      />
    </View>
  );
};

export default FollowerList;
