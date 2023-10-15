import React, {FunctionComponent} from 'react';

import {View, Text, FlatList} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import ItemFavoritesList from '../ItemFavoritesList';
ItemFavoritesList;

const FavoritesList: FunctionComponent = () => {
  const styles = useStyles();
  const RenderItem = ({item}: any) => <ItemFavoritesList data={item} />;
  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavoritesList;
const data = [
  {
    id: 1,
    name: 'Boruto & Itachi Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2020/12/18/avata-1597762609382244058792-16082791043181437744231.jpg',
    rate: 3.28,
  },
  {
    id: 2,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://booksandbao.com/wp-content/uploads/2021/01/tall-750x1000.jpg',
    rate: 2.25,
  },
  {
    id: 3,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://mohinhfigure.com/wp-content/uploads/2021/12/top-manhwa-14.jpg',
    rate: 3.26,
  },
  {
    id: 5,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
    rate: 4.41,
  },
  {
    id: 6,
    name: 'Boruto & Itachi ',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://topshare.com.vn/htdocs/images/news/2021/07/09/800/60e86a4e9de3c_unnamed_1_.jpg',
    rate: 3.28,
  },
  {
    id: 7,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://cinemashed.com/wp-content/uploads/2021/12/positively-yours-678x381.jpg',
    rate: 2.25,
  },
  {
    id: 8,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://mangaohyeah.files.wordpress.com/2012/05/file354752_12537.jpg?w=584',
    rate: 4.5,
  },
  {
    id: 9,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://api.duniagames.co.id/api/content/upload/file/5970127521674484744.jpg',
    rate: 3.26,
  },
  {
    id: 10,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://img5.thuthuatphanmem.vn/uploads/2021/09/29/top-20-manhwa-hay-nhat-hien-nay-khong-the-bo-lo_084931909.jpg',
    rate: 4.41,
  },
  {
    id: 11,
    name: 'Boruto & Itachi Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2020/12/18/avata-1597762609382244058792-16082791043181437744231.jpg',
    rate: 3.28,
  },
  {
    id: 12,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://booksandbao.com/wp-content/uploads/2021/01/tall-750x1000.jpg',
    rate: 2.25,
  },
  {
    id: 13,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image: 'https://cdnxyz.xyz/storage/collections/79573-1666722365.jpg',
    rate: 4.5,
  },
  {
    id: 14,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://mohinhfigure.com/wp-content/uploads/2021/12/top-manhwa-14.jpg',
    rate: 3.26,
  },
  {
    id: 15,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://gamek.mediacdn.vn/133514250583805952/2022/1/15/sword-she-16422636752621114958409.jpg',
    rate: 4.41,
  },
  {
    id: 16,
    name: 'Boruto & Itachi ',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://topshare.com.vn/htdocs/images/news/2021/07/09/800/60e86a4e9de3c_unnamed_1_.jpg',
    rate: 3.28,
  },
  {
    id: 17,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://cinemashed.com/wp-content/uploads/2021/12/positively-yours-678x381.jpg',
    rate: 2.25,
  },
  {
    id: 18,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://mangaohyeah.files.wordpress.com/2012/05/file354752_12537.jpg?w=584',
    rate: 4.5,
  },
  {
    id: 19,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://api.duniagames.co.id/api/content/upload/file/5970127521674484744.jpg',
    rate: 3.26,
  },
  {
    id: 20,
    name: 'Boruto & Itachi',
    topic: ['Fantasy', 'Science Fiction', 'Mystery', 'Mystery'],
    image:
      'https://img5.thuthuatphanmem.vn/uploads/2021/09/29/top-20-manhwa-hay-nhat-hien-nay-khong-the-bo-lo_084931909.jpg',
    rate: 4.41,
  },
];
