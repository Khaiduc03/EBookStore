import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@rneui/themed';
import {HeaderCustom, TopicItem} from '../../../../components';
import TopicsHome from './components/TopicsHome';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const leftIcon = {
    name: 'book',
    type: 'font-awesome',
  };
  const rightIconLeft = {
    name: 'search',
  };
  const rightIconRight = {
    name: 'notifications-outline',
    type: 'ionicon',
  };
  const iconRightTitleList = {
    name: 'arrow-forward-outline',
    type: 'ionicon',
  };

  const handleIcon = () => {
    console.log('Hello');
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={leftIcon}
        title="ComicVerse"
        rightIconleft={rightIconLeft}
        rightIconRight={rightIconRight}
        onPressLeftIcon={handleIcon}
      />

      <HeaderCustom
        title="Explore by Genre"
        rightIconRight={iconRightTitleList}
        onPressLeftIcon={handleIcon}
      />
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate(routes.TOPICS);
        }}>
        <Text>TOPiC</Text>
      </TouchableOpacity>
      <TopicsHome />
    </View>
  );
};

export default Home;
