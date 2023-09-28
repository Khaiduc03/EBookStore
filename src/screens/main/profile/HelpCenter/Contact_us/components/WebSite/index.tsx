import {View, Text} from 'react-native';
import React from 'react';
import {ButtonLong} from '../ButtonLong';
import useStyles from './styles';

const Website = () => {
    const styles = useStyles();

  return (
    <View style={{paddingVertical:20}}>
      <ButtonLong icon_Website title="Website" />
    </View>
  );
};

export default Website;
