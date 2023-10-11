import {View, ScrollView, Image} from 'react-native';

import React, {FunctionComponent, useState} from 'react';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {ComicItem, HeaderCustom, TopicItem} from '../../../../components';

import {createIcon} from '../../../../utils';
import {TopicsHome, ComicsNew, BannerComic, TrendingComic} from './components';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  const [numCols, setNumCols] = useState(3);

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
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
        titleStyle={styles.textTitleHeader}
        onPressRightIconLeft={handlePressSearch}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="ComicVerse"
        rightIconleft={{name: 'search', type: 'ionicon'}}
        rightIconRight={createIcon({
          name: 'notifications-outline',
          type: 'ionicon',
        })}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerComic />
        <HeaderCustom
          titleStyle={styles.textTitle}
          title="Explore by Genre"
          rightIconRight={{
            name: 'arrow-forward-outline',
            type: 'ionicon',
          }}
          onPressRightIconRight={handlePressTopics}
        />

        <TopicsHome />
        <HeaderCustom
          titleStyle={styles.textTitle}
          title="Trending Now"
          rightIconRight={{
            name: 'arrow-forward-outline',
            type: 'ionicon',
          }}
          onPressRightIconRight={handlePressTopics}
        />
        <TrendingComic />

        <HeaderCustom
          titleStyle={styles.textTitle}
          title="New Comics"
          rightIconleft={{
            name: 'grid-outline',
            type: 'ionicon',
            color: numCols === 3 ? '#F89300' : '',
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
