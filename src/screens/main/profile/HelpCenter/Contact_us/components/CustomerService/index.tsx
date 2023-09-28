import {View, Text} from 'react-native';
import React from 'react';
import {ButtonLong} from '../ButtonLong';
import useStyles from './styles';
const CustomerService = () => {
  const styles = useStyles();
  return (
    <View>
      <ButtonLong icon_Service title="Customer Service" />
    </View>
  );
};

export default CustomerService;
