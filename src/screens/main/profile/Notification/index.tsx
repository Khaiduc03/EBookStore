import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import styles from '../Notification/styles';
import { Switch_Notification1, Switch_Notification2, Switch_Notification3, Switch_Notification4, Switch_Notification5, Switch_Notification6, Switch_Notification7, Switch_Notification8 } from '../../../../components/customs/Switch/index';


const Notification = () => {
  return (
    <View style={styles.container}>
      <Header leftIcon title='Thông báo' istitle />
      <Text style={styles.txt}>Thông báo cho tôi khi...</Text>
      <Switch_Notification1 />
      <Switch_Notification2 />
      <Switch_Notification3 />
      <Switch_Notification4 />
      <Switch_Notification5 />
      <Switch_Notification6 />
      <Switch_Notification7 />
      <Switch_Notification8 />
    </View>
  )
}

export default Notification