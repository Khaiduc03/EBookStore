import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon, Image, Divider} from '@rneui/themed';

const HeaderDetail = () => {
  const styles = useStyles();
  const topicTexts = ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'];
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imgComic}
          source={{
            uri: 'https://vidian.me/public-img/image-1677306627308.jpeg',
          }}
        />
        <View style={styles.content}>
          <Text style={styles.nameComic}>Doremon </Text>
          <Text style={styles.author}>Fujiko F.ujio</Text>
          <Text style={styles.dayCreat}>Released on Dec, 2015</Text>
          <View style={styles.topicsContainer}>
            {topicTexts.map((text, index) => (
              <View key={index} style={styles.itemTopics}>
                <Text style={styles.textTopics}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.interactContainer}>
        <View style={styles.interactItem}>
          <View style={styles.rate}>
            <Text style={styles.numberInteract}>4.9</Text>
            <Icon name="star" type="ionicon" size={20} color={'grey'} />
          </View>
          <Text style={styles.titleInteracItem}>6.8k Reviews</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>5.6M+</Text>
          <Text style={styles.titleInteracItem}>Favorite</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>784</Text>
          <Text style={styles.titleInteracItem}>Pages</Text>
        </View>
        <Divider orientation="vertical" width={1} color="#9E9E9E" />
        <View style={styles.interactItem}>
          <Text style={styles.numberInteract}>50 M+</Text>
          <Text style={styles.titleInteracItem}>Views</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderDetail;
