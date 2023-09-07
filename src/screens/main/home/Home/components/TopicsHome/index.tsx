import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import useStyles from './styles';
import {Topic} from '../../../../../../types/TopicType';
import {TopicItem} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const TopicsHome = () => {
  const styles = useStyles();

  const handlePressImage = () => {
    NavigationService.navigate(routes.TOPICS);
  };

  const RenderItem = ({item}: any) => (
    <TopicItem
      title={item.title}
      viewStyle={styles.itemTopic}
      image={item.image}
      onPress={handlePressImage}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
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
      'https://i.pinimg.com/originals/fc/99/4e/fc994e76624d91c7baa236cec4043755.jpg',
  },
  {
    id: 13,
    title: 'Enriqueta',
    image:
      'https://i.pinimg.com/1200x/a5/6d/47/a56d47ee7a756a257dec50dfbf87b625.jpg',
  },
  {
    id: 15,
    title: 'Izzy',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/lieu-than-thuvienanime-3.jpg',
  },
  {
    id: 10,
    title: 'Izzy',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
  {
    id: 17,
    title: 'Izzy',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
  {
    id: 18,
    title: 'Izzy',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/4/6/be1-164922643669587606129.jpg',
  },
];
