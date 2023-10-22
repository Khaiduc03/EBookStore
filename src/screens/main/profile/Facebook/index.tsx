import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ButtonLong} from '../HelpCenter/Contact_us/components';

const Facebook: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ButtonLong icon_Facebook title="Facebook" />
    </View>
  );
};

export default Facebook;
