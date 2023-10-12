import {View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {CustomerService, Facebook, Website} from './components';

const Contact_us: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
        <View style={styles.btnCustomerService}>
          <CustomerService />
        </View>
        <View style={styles.btnFacebook}>
          <Facebook />
        </View>
        <View style={styles.btnWebsite}>
          <Website />
        </View>
      </View>
    </View>
  );
};

export default Contact_us;
