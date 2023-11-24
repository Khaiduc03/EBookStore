import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';

type Props = {
  data?: any;
};
const ItemPostUser: React.FC<Props> = props => {
  const {data} = props;
  const itemWidth = Dimensions.get('window').width / 3;
  const handleDetailClick = () => {
    NavigationService.navigate(routes.POSTDETAILUSERS);
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
      <Image
        source={{uri: data.images}}
        style={{width: itemWidth - 5, height: itemWidth - 5, borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

export default ItemPostUser;
