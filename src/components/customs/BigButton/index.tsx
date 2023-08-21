import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButtonProps} from './types';

const BigButton: React.FunctionComponent<BigButtonProps> = props => {
  const styles = useStyles();
  const {textButton, onPressButton, style} = props;

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <Text style={[styles.buttonText, style]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
