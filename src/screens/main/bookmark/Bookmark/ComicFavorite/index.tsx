import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {Icon, normalize} from '@rneui/themed';
import {images} from '../../../../../assets';
import TextCustom from '../../../../../components/customs/Text';

type Item = {
  id: string;
  image: any;
  name: string;
  rating: string;
  price: string;
};
type Props = {
  data?: Item[];
};

const renderItem = ({item}: {item: Item}) => (
  <View style={{flex: 1, paddingHorizontal: 24, paddingVertical: 20}}>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Image
          style={{
            width: normalize(100),
            height: normalize(150),
            borderRadius: 15,
          }}
          source={item.image}
        />
      </TouchableOpacity>

      <View style={{marginStart: 15}}>
        <TextCustom title={item.name} textBold />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '62%',
            paddingVertical: 30,
          }}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Icon name="star" type="font-awesome" />
            <TextCustom title={item.rating} textBold />
          </View>
          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <Icon name="ellipsis-vertical" type="ionicon" size={27} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Icon name="dollar-sign" type="font-awesome-5" size={20} />
          <TextCustom title={item.price} textBold />
        </View>
      </View>
    </View>
  </View>
);

const ComicFavorite: React.FC<Props> = props => {
  const {data} = props;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ComicFavorite;

const data: Item[] = [
  {
    id: '1',
    image: images.avata,
    name: 'Doraemon',
    rating: '4.5',
    price: '10.99',
  },
  {
    id: '2',
    image: images.avata,
    name: 'Item 2',
    rating: '3.5',
    price: '8.99',
  },
  {
    id: '3',
    image: images.avata,
    name: 'Item 3',
    rating: '3.4',
    price: '8.99',
  },
  {
    id: '4',
    image: images.avata,
    name: 'Item 4',
    rating: '3.8',
    price: '8.99',
  },
  {
    id: '5',
    image: images.avata,
    name: 'Item 5',
    rating: '3.9',
    price: '8.99',
  },
  {
    id: '6',
    image: images.avata,
    name: 'Item 6',
    rating: '4.9',
    price: '8.99',
  },
];

export {data};
