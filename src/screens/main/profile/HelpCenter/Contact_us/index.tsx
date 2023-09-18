import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../../components/customs/Headers/index';
import { ButtonLong } from '../../../../../components/customs/Button';
import useStyles from './styles';


const Contact_us: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.Button_Service}>
        <ButtonLong icon_Service title='Dịch vụ khách hàng' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button_Facebook}>
        <ButtonLong icon_Facebook title='Facebook' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button_Website}>
        <ButtonLong icon_Website title='Website' />
      </TouchableOpacity>
    </View>
  )
}

export default Contact_us