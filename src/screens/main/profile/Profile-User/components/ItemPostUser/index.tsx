import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {ForumType} from '../../../../../../redux/types/forum.type';
import FastImage from 'react-native-fast-image';

type Props = {
  data?: ForumType;
};
const ItemPostUser: React.FC<Props> = props => {
  const {data} = props;
  const itemWidth = Dimensions.get('window').width / 3;
  const handleDetailClick = () => {
    NavigationService.navigate(routes.POSTDETAIL, {
      post_uuid: props.data?.uuid,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleDetailClick}
      style={{
        width: itemWidth,
        height: itemWidth,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <FastImage
        source={{
          uri: data?.images[0]
            ? data?.images[0]
            : 'https://demofree.sirv.com/nope-not-here.jpg',
        }}
        style={{width: itemWidth - 5, height: itemWidth - 5, borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

export default ItemPostUser;
