import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonLong from '../ButtonLong';

const Website = () => {
    const styles = useStyles();

  return (
    <View style={{paddingVertical:20}}>
      <ButtonLong icon_Website title="Website" />
    </View>
  );
};

export default Website;
