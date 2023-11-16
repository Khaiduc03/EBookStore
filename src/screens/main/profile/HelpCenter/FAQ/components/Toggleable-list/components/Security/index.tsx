import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import { Toggleable } from '../../../../../../../../../components';

const Toggleable_Securiry = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Toggleable
        title="Security and Privacy?"
        content="Ensure that you understand the privacy and security policies of the application, particularly when creating an account and engaging with the community."
      />
    </View>
  );
};

export default Toggleable_Securiry;
