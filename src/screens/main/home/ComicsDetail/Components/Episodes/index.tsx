import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import useStyles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const Episodes = () => {
  const styles = useStyles();

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.chapterContainer}>
        <Text style={styles.textChapter}>Chapter {item.chapterNumber}</Text>
        <Text style={styles.textChapter}>{item.dayUpdate}</Text>
        <Text style={styles.textChapter}>{item.view}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerChapter}>
        <Text style={styles.textHeader}>Chapters</Text>
        <Text style={styles.textHeader}>Update</Text>
        <Text style={styles.textHeader}>Views</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Episodes;
const data = [
  {
    id: 1,
    chapterNumber: 1,
    dayUpdate: '8/2/2024',
    view: 1,
  },
  {
    id: 2,
    chapterNumber: 2,
    dayUpdate: '9/12/2024',
    view: 2,
  },
  {
    id: 3,
    chapterNumber: 3,
    dayUpdate: '11/3/2023',
    view: 3,
  },
  {
    id: 4,
    chapterNumber: 4,
    dayUpdate: '5/23/2024',
    view: 4,
  },
  {
    id: 5,
    chapterNumber: 5,
    dayUpdate: '11/8/2023',
    view: 5,
  },
  {
    id: 6,
    chapterNumber: 6,
    dayUpdate: '3/12/2023',
    view: 6,
  },
  {
    id: 7,
    chapterNumber: 7,
    dayUpdate: '11/13/2023',
    view: 7,
  },
  {
    id: 8,
    chapterNumber: 8,
    dayUpdate: '11/13/2022',
    view: 8,
  },
  {
    id: 9,
    chapterNumber: 9,
    dayUpdate: '2/28/2024',
    view: 9,
  },
  {
    id: 10,
    chapterNumber: 10,
    dayUpdate: '9/10/2024',
    view: 10,
  },
  {
    id: 11,
    chapterNumber: 11,
    dayUpdate: '12/5/2023',
    view: 11,
  },
  {
    id: 12,
    chapterNumber: 12,
    dayUpdate: '3/17/2023',
    view: 12,
  },
  {
    id: 13,
    chapterNumber: 13,
    dayUpdate: '4/20/2024',
    view: 13,
  },
  {
    id: 14,
    chapterNumber: 14,
    dayUpdate: '6/24/2023',
    view: 14,
  },
  {
    id: 15,
    chapterNumber: 15,
    dayUpdate: '8/1/2023',
    view: 15,
  },
  {
    id: 16,
    chapterNumber: 16,
    dayUpdate: '9/21/2022',
    view: 16,
  },
  {
    id: 17,
    chapterNumber: 17,
    dayUpdate: '9/29/2022',
    view: 17,
  },
  {
    id: 18,
    chapterNumber: 18,
    dayUpdate: '7/12/2023',
    view: 18,
  },
  {
    id: 19,
    chapterNumber: 19,
    dayUpdate: '12/12/2023',
    view: 19,
  },
  {
    id: 20,
    chapterNumber: 20,
    dayUpdate: '5/17/2024',
    view: 20,
  },
  {
    id: 21,
    chapterNumber: 21,
    dayUpdate: '5/13/2024',
    view: 20,
  },
  {
    id: 22,
    chapterNumber: 22,
    dayUpdate: '5/13/2024',
    view: 20,
  },
  {
    id: 23,
    chapterNumber: 23,
    dayUpdate: '5/13/2024',
    view: 20,
  },
  {
    id: 24,
    chapterNumber: 24,
    dayUpdate: '5/13/2024',
    view: 20,
  },
];
