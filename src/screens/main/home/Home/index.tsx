import {View, ScrollView} from 'react-native';

import React, {FunctionComponent, useState} from 'react';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {ComicItem, HeaderCustom, TopicItem} from '../../../../components';

import {createIcon} from '../../../../utils';
import {TopicsHome, ComicsNew} from './components';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const [numCols, setNumCols] = useState(2);
  const [leftIconPressed, setLeftIconPressed] = useState(false);
  const [rightIconPressed, setRightIconPressed] = useState(false);

  const handleListIconPress = () => {
    setNumCols(2);
    setLeftIconPressed(!leftIconPressed);
    setRightIconPressed(false);
  };
  const handleGridIconPress = () => {
    setNumCols(1);
    setRightIconPressed(!rightIconPressed);
    setLeftIconPressed(false);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={createIcon({name: 'book', type: 'font-awesome'})}
        title="ComicVerse"
        rightIconleft={createIcon({name: 'search'})}
        rightIconRight={createIcon({
          name: 'notifications-outline',
          type: 'ionicon',
        })}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <HeaderCustom title="Continue reading" onPressLeftIcon={handleIcon} /> */}
        <HeaderCustom
          title="Explore by Genre"
          rightIconRight={createIcon({
            name: 'arrow-forward-outline',
            type: 'ionicon',
          })}
        />

        <TopicsHome />
        <HeaderCustom
          title="Explore by Genre"
          rightIconleft={createIcon({
            name: 'grid-outline',
            type: 'ionicon',
            color: leftIconPressed ? 'red' : '',
          })}
          rightIconRight={createIcon({
            name: 'list-circle-outline',
            type: 'ionicon',
            color: rightIconPressed ? 'red' : '',
          })}
          onPressRightIconLeft={handleListIconPress}
          onPressRightIconRight={handleGridIconPress}
        />
        <ComicsNew numCols={numCols} />
      </ScrollView>
    </View>
  );
};

export default Home;
