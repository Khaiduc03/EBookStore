import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          NavigationService.navigate(routes.TOPICS);
        }}
      />
    </View>
  );
};

export default Home;
