import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {ButtonSmallpros} from './types';
import { theme } from '../../../../../../../theme';

export const ButtonSmall: React.FC<ButtonSmallpros> = props => {
  const {title, onPress, isSelected} = props;
  const styles = useStyles();

  const buttonBackgroundColor = isSelected ? '#ffffff' : '#F89300';
  const buttonTextColor = isSelected ? '#F89300' : '#ffffff';

  return (
    <TouchableOpacity
      style={[
        styles.ButtonSmall,
        {backgroundColor: buttonBackgroundColor, borderColor: '#F89300'},
      ]}
      onPress={onPress}
      disabled={isSelected}>
      <Text style={[styles.txtButtonSmall, {color: buttonTextColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
