import {Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../../navigation';
import {routes} from '../../../../../constants';

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
      }}>
      <Image
        source={data.images}
        style={{width: itemWidth - 1.5, height: itemWidth - 1.5}}
      />
    </TouchableOpacity>
  );
};

export default ItemPostUser;
