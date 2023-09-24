import {View} from 'react-native';
import React from 'react';
import {ButtonLong} from '../../../../../components/customs/Button';
import useStyles from './styles';

const Contact_us: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.viewButton}>
        <ButtonLong icon_Service title="Customer Service" />
        <ButtonLong icon_Facebook title="Facebook" />
        <ButtonLong icon_Website title="Website" />
      </View>
    </View>
  );
};

export default Contact_us;
