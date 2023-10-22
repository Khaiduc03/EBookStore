import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButtonProps} from './types';

const BigButton: React.FunctionComponent<BigButtonProps> = ({
  textButton,
  onPressButton,
  style,
  textStyle,
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
