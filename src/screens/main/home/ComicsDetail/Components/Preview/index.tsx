import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';

const Preview = () => {
  const styles = useStyles();
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, color: '#000'}}>Episodes</Text>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({});
