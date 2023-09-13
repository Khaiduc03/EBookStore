import { View } from 'react-native';
import { Button, Text, Image } from '@rneui/base';

import React, { FunctionComponent, useState } from 'react';

import useStyles from './styles';
import { images } from '../../../../assets/images/png/index';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const [numCols, setNumCols] = useState(2);

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(2);
  };

  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  const handlePressTopics = () => {
    NavigationService.navigate(routes.TOPICS);
  };

  return (
    <View style={styles.container}>

      <Text>Comic Verse</Text>

    </View>
  );
};

export default Home;
