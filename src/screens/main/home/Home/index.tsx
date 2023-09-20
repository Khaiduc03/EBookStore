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
      <HeaderCustom
        onPressRightIconLeft={handlePressSearch}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="ComicVerse"
        rightIconleft={{name: 'search', type: 'ionicon'}}
        rightIconRight={createIcon({
          name: 'notifications-outline',
          type: 'ionicon',
        })}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderCustom
          title="Explore by Genre"
          rightIconRight={{
            name: 'arrow-forward-outline',
            type: 'ionicon',
          }}
          onPressRightIconRight={handlePressTopics}
        />

        <TopicsHome />
        <HeaderCustom
          title="New Comics"
          rightIconleft={{
            name: 'grid-outline',
            type: 'ionicon',
            color: numCols === 2 ? '#F89300' : '',
          }}
          rightIconRight={{
            name: 'list-circle-outline',
            type: 'ionicon',
            color: numCols === 1 ? '#F89300' : '',
          }}
          onPressRightIconLeft={handleGridIconPress}
          onPressRightIconRight={handleListIconPress}
        />
        <ComicsNew numCols={numCols} />
      </ScrollView>
    </View>
  );
};

export default Home;
