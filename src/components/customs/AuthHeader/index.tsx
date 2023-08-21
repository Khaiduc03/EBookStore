import {View, Text} from 'react-native';
import React from 'react';
import {AuthProps} from './types';
import useStyles from './styles';
import InputCustom from '../InputCustom';

const AuthHeader: React.FunctionComponent<AuthProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
    </View>
  );
};

export default AuthHeader;
