import {View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {CustomerService, Facebook, Website} from './components';

const Contact_us: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
        <View style={styles.viewCustomerService}>
          <CustomerService />
        </View>
        <View style={styles.viewFacebook}>
          <Facebook />
        </View>
        <View style={styles.viewWebsite}>
          <Website />
        </View>
      </View>
    </View>
  );
};

export default Contact_us;
