import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {ButtonLong} from '../HelpCenter/Contact_us/components';

const Discord: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ButtonLong icon_Discord title="Discord" />
    </View>
  );
};

export default Discord;
