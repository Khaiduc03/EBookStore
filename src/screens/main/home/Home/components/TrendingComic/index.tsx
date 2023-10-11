import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import ItemTrending from './components/ItemTrending';

const TrendingComic = () => {
  const styles = useStyles();
  const RenderItem = ({item, index}: any) => (
    <ItemTrending index={index} data={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16, gap: 5}}
        data={data}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default TrendingComic;
const data = [
  {
    id: 1,
    name: 'Gekko gecko',
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
  },
  {
    id: 2,
    name: 'Passer domesticus',
    image:
      'https://mohinhfigure.com/wp-content/uploads/2021/12/top-manhwa-14.jpg',
  },
  {
    id: 3,
    name: 'Dasyurus maculatus',
    image:
      'https://api.duniagames.co.id/api/content/upload/file/5970127521674484744.jpg',
  },
  {
    id: 4,
    name: 'Pelecanus conspicillatus',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
  },
  {
    id: 5,
    name: 'Parus atricapillus',
    image:
      'https://topshare.com.vn/htdocs/images/news/2021/07/09/800/60e86a4e9de3c_unnamed_1_.jpg',
  },
  {
    id: 6,
    name: 'Myiarchus tuberculifer',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2020/12/18/avata-1597762609382244058792-16082791043181437744231.jpg',
  },
  {
    id: 7,
    name: 'Ammospermophilus nelsoni',
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
  },
  {
    id: 8,
    name: 'Mirounga leonina',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
  },
  {
    id: 9,
    name: 'Callipepla gambelii',
    image:
      'https://cinemashed.com/wp-content/uploads/2021/12/positively-yours-678x381.jpg',
  },
  {
    id: 10,
    name: 'Erinaceus frontalis',
    image:
      'https://mangaohyeah.files.wordpress.com/2012/05/file354752_12537.jpg?w=584',
  },
  {
    id: 11,
    name: 'Gekko gecko',
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
  },
  {
    id: 12,
    name: 'Passer domesticus',
    image:
      'https://mohinhfigure.com/wp-content/uploads/2021/12/top-manhwa-14.jpg',
  },
  {
    id: 13,
    name: 'Dasyurus maculatus',
    image:
      'https://api.duniagames.co.id/api/content/upload/file/5970127521674484744.jpg',
  },
  {
    id: 14,
    name: 'Pelecanus conspicillatus',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
  },
  {
    id: 15,
    name: 'Parus atricapillus',
    image:
      'https://topshare.com.vn/htdocs/images/news/2021/07/09/800/60e86a4e9de3c_unnamed_1_.jpg',
  },
  {
    id: 16,
    name: 'Myiarchus tuberculifer',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2020/12/18/avata-1597762609382244058792-16082791043181437744231.jpg',
  },
  {
    id: 17,
    name: 'Ammospermophilus nelsoni',
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
  },
  {
    id: 18,
    name: 'Mirounga leonina',
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
  },
  {
    id: 19,
    name: 'Callipepla gambelii',
    image:
      'https://cinemashed.com/wp-content/uploads/2021/12/positively-yours-678x381.jpg',
  },
  {
    id: 20,
    name: 'Erinaceus frontalis',
    image:
      'https://mangaohyeah.files.wordpress.com/2012/05/file354752_12537.jpg?w=584',
  },
];
