import {View, Text} from 'react-native';
import React from 'react';
import {ButtonLong} from '../ButtonLong';
import useStyles from './styles';

const Facebook = () => {
  const styles = useStyles();

  return (
    <View>
      <ButtonLong icon_Facebook title="Facebook" />
    </View>
  );
};

export default Facebook;
