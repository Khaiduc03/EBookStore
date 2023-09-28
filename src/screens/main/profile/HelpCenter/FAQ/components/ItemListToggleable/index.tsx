import {View, Text, FlatList} from 'react-native';
import React from 'react';
import { Toggleable } from '../../../../../../../components/customs/Toggleable';

const ItemListToggleable = () => {
  return (
    <View style={{gap: 20}}>
      <Toggleable
        title="Comic Verse là gì ?"
        content="Comic Verse là một ứng dụng độc đáo kết hợp mạng xã hội và việc đọc truyện tranh. Kết nối với cộng đồng yêu thích truyện tranh, chia sẻ, tương tác và tận hưởng hàng ngàn truyện tranh đa dạng, từ hài hước đến kinh dị. Dễ sử dụng và thú vị!"
      />

      <Toggleable
        title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
        content="Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!"
      />

      <Toggleable
        title="Làm thế nào để trở thành thành viên VIP của Comic Verse ?"
        content="Nạp tiền vào là có VIP ^__^ !!!!!!!!!!!!!!!!!!!!!!!!!!"
      />
    </View>
  );
};

export default ItemListToggleable;