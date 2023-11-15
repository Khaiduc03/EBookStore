import React, {FunctionComponent, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {Button, Icon, Overlay} from '@rneui/base';
import FastImage from 'react-native-fast-image';

const Explore: FunctionComponent = () => {
  const styles = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return <View style={styles.container}></View>;
};

export default Explore;
