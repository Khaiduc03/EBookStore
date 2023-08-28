import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate(routes.TOPICS);
        }}>
        <Text style={styles.textTopics}>TOPiC</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;
