import {View, Text} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../../../utils/font';
import styles from './styles';

const Topics: React.FunctionComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 16}}>index</Text>
      <Text style={{fontSize: 16, fontFamily: 'Urbanist-Bold'}}>index2</Text>
    </View>
  );
};

export default Topics;
