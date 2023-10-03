import React, {FunctionComponent} from 'react';

import {View, Text, FlatList} from 'react-native';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {FavoritesList} from './components';

const Explore: FunctionComponent = () => {
  const styles = useStyles();

  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        onPressRightIconLeft={handlePressSearch}
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="Favorites List"
        rightIconleft={{name: 'search', type: 'ionicon'}}
        rightIconRight={{
          name: 'notifications-outline',
          type: 'ionicon',
        }}
      />
      <FavoritesList />
    </View>
  );
};

export default Explore;
