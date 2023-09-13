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
    NavigationService.navigate(routes.COMICBYTOPIC);
  };

  const RenderItem = ({item, index}: any) => (
    <TopicItem
      title={item.title}
      viewStyle={styles.itemTopic}
      image={item.image}
      onPress={handlePressImage}
      index={1.5}
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
    id: 1,
    title: 'Glad',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
  },
  {
    id: 2,
    title: 'Amye',
    image:
      'https://i.pinimg.com/originals/8a/5f/d9/8a5fd9d9bd638abe7a1cf80c0adc678a.jpg',
  },
  {
    id: 3,
    title: 'Chan',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/thanh-y-thuvienanime.jpeg',
  },
  {
    id: 4,
    title: 'Rich',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/hoa-linh-nhi-thuvienanime-thumb.jpg',
  },
  {
    id: 5,
    title: 'Eolande',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/hoa-linh-nhi-thuvienanime-8.jpg',
  },
  {
    id: 6,
    title: 'Alejandrina',
    image:
      'https://img.photo.gamelandvn.com/2012/10/121010_thegioihoanmy05.jpg',
  },
  {
    id: 7,
    title: 'Elvyn',
    image:
      'https://img.photo.gamelandvn.com/2012/10/121010_thegioihoanmy01.jpg',
  },
  {
    id: 8,
    title: 'Al',
    image:
      'https://img.photo.gamelandvn.com/2012/10/121010_thegioihoanmy02.jpg',
  },
  {
    id: 9,
    title: 'Lianna',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/hoa-linh-nhi-thuvienanime-17.jpg',
  },
  {
    id: 10,
    title: 'Kessia',
    image:
      'https://pic-bstarstatic.akamaized.net/ugc/36327a31fc92158cd646bb2682b37ce2.jpeg',
  },
  {
    id: 11,
    title: 'Paulo',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/hoa-linh-nhi-thuvienanime-12.jpg',
  },
  {
    id: 12,
    title: 'Jeannie',
    image:
      'https://images2.thanhnien.vn/Uploaded/khuongduy/2018_05_21/dau-pha-thuong-khung-02_WPOH.jpg',
  },
  {
    id: 13,
    title: 'Darcy',
    image:
      'https://nhanvat.wiki/wp-content/uploads/2023/01/Tuong-mao-Tieu-Viem.jpg',
  },
  {
    id: 14,
    title: 'Filbert',
    image:
      'https://i0.wp.com/d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20151231143238/di-hoa-chia-khoa-lam-nen-anh-hung-thuong-khung-chi-mong-2.jpg',
  },
  {
    id: 15,
    title: 'Frederik',
    image:
      'https://thuvienanime.com/wp-content/uploads/2021/09/my-do-toa-thuvienanime-thumb.jpg',
  },
  {
    id: 16,
    title: 'Emalee',
    image:
      'https://pic-bstarstatic.akamaized.net/ugc/36327a31fc92158cd646bb2682b37ce2.jpeg',
  },
  {
    id: 17,
    title: 'Jesse',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
  },
  {
    id: 18,
    title: 'Lorne',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
  },
  {
    id: 19,
    title: 'Hercule',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
  },
  {
    id: 20,
    title: 'Morton',
    image: 'https://vidian.me/public-img/image-1677306627308.jpeg',
  },
];
