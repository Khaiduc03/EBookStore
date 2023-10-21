import React from 'react';
import {Text, View} from 'react-native';
import {ProfileImage} from '../../../assets/svg';
import useStyles from './styles';
import {AuthProps} from './types';
import {TouchableOpacity} from 'react-native';

const AuthHeaderV1: React.FunctionComponent<AuthProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.avatar && props.avatar}
      </View>

      <View style={{flexDirection: 'row'}}>
        {props.subTitle && (
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        )}
        <TouchableOpacity onPress={props.onPress}>
          {props.titleComicverse && (
            <Text style={styles.titleComicverse}>{props.titleComicverse}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthHeaderV1;
