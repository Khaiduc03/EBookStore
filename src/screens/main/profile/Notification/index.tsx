import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import styles from '../Notification/styles';
import { Switch_ } from '../../../../components/customs/Switch/index';


const Notification = () => {
  return (
    <View style={styles.container}>
      <Header leftIcon title='Thông báo' istitle />
      <Text style={styles.txt}>Thông báo cho tôi khi...</Text>
      <Switch_ title='Có một khuyến nghị mới' />
      <Switch_ title='Có một bộ sách mới' />
      <Switch_ title='Có bản cập nhật từ Tác giả' />
      <Switch_ title='Có sẵn các đợt giảm giá' />
      <Switch_ title='Khi tôi mua hàng' />
      <Switch_ title='Bật thông báo hệ thống ứng dụng' />
      <Switch_ title='Các mẹo và dịch vụ mới có sẵn' />
      <Switch_ title='Tham gia khảo sát' />
      
    </View>
  )
}

export default Notification