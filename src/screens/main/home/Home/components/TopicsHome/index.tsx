import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Topic} from '../../../../../../types/TopicType';
import {TopicItem} from '../../../../../../components';

const TopicsHome = () => {
  const styles = useStyles();

  const RenderItem = ({item}: any) => (
    <TopicItem title={item.title} image={item.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TopicsHome;
const data = [
  {
    id: 5,
    title: 'Bathsheba',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
  {
    id: 13,
    title: 'Enriqueta',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
  {
    id: 15,
    title: 'Izzy',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
];
