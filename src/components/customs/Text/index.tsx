import {View, Text} from 'react-native';
import React from 'react';
import {TextCustomProps} from './types';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../redux';

const TextCustom: React.FunctionComponent<TextCustomProps> = props => {
  const {textBold, textLight, title, number, textPrimary, statuss} = props;
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  return (
    <View>
      {textLight && <Text style={styles.Lighttext}>{title}</Text>}
      {textBold && <Text style={styles.Boldtext}>{title}</Text>}
      {textPrimary && <Text style={styles.Primarytext}>{title}</Text>}
      {number && <Text style={styles.Boldtext}>{number}</Text>}
      {statuss && <Text style={styles.Lighttext}>{user.status}</Text>}
    </View>
  );
};

export default TextCustom;
