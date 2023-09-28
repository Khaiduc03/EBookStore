import {Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

type Props = {
  data?: any;
};
const ItemPost: React.FC<Props> = props => {
  const {data} = props;
  const itemWidth = Dimensions.get('window').width / 3;
  const handleDetailClick = () => {
    NavigationService.navigate(routes.POSTDETAIL);
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
      }}>
      <Image
        source={data.images}
        style={{width: itemWidth - 3, height: itemWidth - 3}}
      />
    </TouchableOpacity>
  );
};

export default ItemPost;
