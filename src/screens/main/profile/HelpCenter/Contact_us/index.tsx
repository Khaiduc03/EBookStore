import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../../components/customs/Headers/index';
import { images } from '../../../../../assets/images/png/index';
import { ButtonLong } from '../../../../../components/customs/Button';
import styles from '../Contact_us/styles';


const Contact_us: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon
        title='Trung tâm hỗ trợ'
        istitle />
      <TouchableOpacity style={styles.Button_Service}>
        <ButtonLong icon_Service istitle title='Dịch vụ khách hàng' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button_Facebook}>
        <ButtonLong icon_Facebook istitle title='Facebook' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button_Website}>
        <ButtonLong icon_Website istitle title='Website' />
      </TouchableOpacity>
    </View>
  )
}

export default Contact_us