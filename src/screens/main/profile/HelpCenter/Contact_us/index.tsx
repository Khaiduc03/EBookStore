import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../../components/customs/Headers/index';
import { ButtonLong } from '../../../../../components/customs/Button';
import useStyles from './styles';


const Contact_us: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.Button_Service}>
        <ButtonLong icon_Service title='Dịch vụ khách hàng' />
      </View>
      <View style={styles.Button_Facebook}>
        <ButtonLong icon_Facebook title='Facebook' />
      </View>
      <View style={styles.Button_Website}>
        <ButtonLong icon_Website title='Website' />
      </View>
    </View>
  )
}

export default Contact_us