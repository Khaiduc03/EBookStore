import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import useStyles from '../Notification/styles';
import { Switch_ } from '../../../../components/customs/Switch/index';


const Notification: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Header leftIcon title='Notification' istitle />
      <Text style={styles.txt}>Notify me when...</Text>
      <Switch_ title='There is a new recommendation' />
      <Switch_ title='There is a new set of books' />
      <Switch_ title='There is an update from the Author' />
      <Switch_ title='Discounts available' />
      <Switch_ title='When I make a purchase' />
      <Switch_ title='Turn on app system notifications' />
      <Switch_ title='New tips and services available' />
      <Switch_ title='Participate in surveys' />

    </View>
  )
}

export default Notification