import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonLong from '../ButtonLong';

const Facebook = () => {
  const styles = useStyles();

  return (
    <View>
      <ButtonLong icon_Facebook title="Facebook" />
    </View>
  );
};

export default Facebook;
