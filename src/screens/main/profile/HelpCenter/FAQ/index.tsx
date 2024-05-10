import React from 'react';
import {View} from 'react-native';
import {ItemFAQ} from './components';
import useStyles from './styles';

const FAQ: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ItemFAQ />
    </View>
  );
};

export default FAQ;
