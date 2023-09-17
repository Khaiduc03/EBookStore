import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import useStyles from '../Notification/styles';
import Switch_ from '../../../../components/customs/Switch/index';
import { routes } from '../../../../constants';
import { NavigationService } from '../../../../navigation';


const Notification: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <Header leftIcon onPressLeftIcon={handlePressGoback} title='Notification' istitle />
      <Text style={styles.txt}>Notify me when...</Text>
      <View style={styles.View}>
        <Text style={styles.Text}>There is a new recommendation</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>There is a new set of books</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>There is an update from the Author</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>Discounts available</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>When I make a purchase</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>Turn on app system notifications</Text>
        <Switch_ />
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>New tips and services available</Text>
        <Switch_ />
      </View><View style={styles.View}>
        <Text style={styles.Text}>Participate in surveys</Text>
        <Switch_ />
      </View>

    </View>
  )
}

export default Notification